import datetime
from base64 import urlsafe_b64encode

from django.contrib.auth import authenticate, get_user_model
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ObjectDoesNotExist, ValidationError, BadRequest
from django.core.mail import send_mail
from django.http import HttpResponse, HttpResponseBadRequest
from django.shortcuts import redirect
from django.urls import reverse_lazy
from django.utils.decorators import method_decorator
from django.views import View
from django.views.decorators.csrf import csrf_exempt
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response

from .models import Teacher, Student


class CustomAuthData(ObtainAuthToken):

    def post(self, request, *args, **kwargs):

        user_data = {
            "username": request.data.get('username'),
            "password": request.data.get('password')
        }

        try:
            user = authenticate(request, **user_data)
            token, created = Token.objects.get_or_create(user=user)
            resp = {
                       "sucess": True,
                       "token": token.key,
                       "user_id": user.id,
                       "user_email": user.email,
                       "is_teacher": Teacher.objects.filter(user=user).exists(),
                       "is_student": Student.objects.filter(user=user).exists()
                   },
        except:
            resp = {
                "sucess": False,
                "token": "",
                "user_id": 0,
                "user_email": "",
                "is_teacher": False,
                "is_student": False
            }
        return Response(resp)

    def get(self, request, *args, **kwargs):

        token = request.headers['token']
        try:
            user = Token.objects.get(key=token).user
            user_id = user.id
            user_email = user.email
        except Token.DoesNotExist:
            user_id = 0
            user_email = ''

        return Response({
            "token": token,
            "user_id": user_id,
            "user_email": user_email,
            "is_teacher": Teacher.objects.filter(user=user).exists(),
            "is_student": Student.objects.filter(user=user).exists()
        })


def generate_token(email):
    """Return password reset token (str) based on the user's email, id and last login time. Error page if not found"""
    try:
        user = get_user_model().objects.get(email=email)
    except ObjectDoesNotExist:
        raise BadRequest('Email not found')
    pk, email, last_login = user.pk, user.email, user.last_login
    token = '$'.join((str(pk), str(last_login), email))
    return str(urlsafe_b64encode(bytes(token, encoding='utf8')), encoding='utf8')


class PasswordForgot(View):
    def get(self, request, *args, **kwargs):
        """Check if email exists and send the password reset link to email"""
        email = request.GET.get('email')
        if not email:
            return HttpResponseBadRequest('Email must be provided')
        token = generate_token(email)

        subject = 'Just - password reset link'
        link = f'{request.scheme}://{request.get_host()}{reverse_lazy("account:password_reset")}?email={email}&token={token}'
        message = f'To reset your password, follow the link: {link}'
        recipient_list = [email]
        from_email = None

        send_mail(subject, message, from_email, recipient_list=recipient_list)
        return HttpResponse('Check your email')


class PasswordReset(View):
    def get(self, request, *args, **kwargs):
        """Process the reset link from the email. If ok, redirect to password change page"""
        redirect_url = '/'  # temp
        email = request.GET.get('email')
        token_link = request.GET.get('token')
        if not email or not token_link:
            return HttpResponseBadRequest('No data provided')
        if token_link == generate_token(email):
            return redirect(redirect_url)
        return HttpResponseBadRequest('Invalid token')


@method_decorator(csrf_exempt, name='dispatch')
class PasswordChange(View):
    def post(self, request, *args, **kwargs):
        """Change password (after validation) using default hashing method"""
        email = request.POST.get('email')
        token = request.POST.get('token')
        new_password = request.POST.get('new_password')
        new_password_repeat = request.POST.get('new_password_repeat')

        if not email or not token:
            return HttpResponseBadRequest('Invalid data')

        if not new_password or not new_password == new_password_repeat:
            return HttpResponseBadRequest('Passwords mismatch')

        if not token == generate_token(email):
            return HttpResponseBadRequest('Invalid token')

        try:
            validate_password(new_password)
        except ValidationError as e:
            return HttpResponseBadRequest('Password validation error: ' + str(e))

        user = get_user_model().objects.get(email=email)
        user.set_password(new_password)
        # update last-login time to ensure the token is used only once
        user.last_login = datetime.datetime.utcnow()
        user.save()
        return HttpResponse('Password changed')
