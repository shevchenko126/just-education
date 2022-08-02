from django.shortcuts import render
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
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


@method_decorator(csrf_exempt, name='dispatch')
class PasswordChangeCabinet(APIView):
    def post(self, request, *args, **kwargs):
        try:
            token = request.headers['token']
            new_password = request.POST.get('new_password')
            new_password_repeat = request.POST.get('new_password_repeat')
            user = Token.objects.get(key=token).user
            if new_password == new_password_repeat:
                user.set_password(new_password)
                user.save()
                return Response('Password changed!', status=status.HTTP_200_OK)
            else:
                return Response('The new passwords do NOT match!',
                                status=status.HTTP_400_BAD_REQUEST)
        except KeyError:
            return Response('No token provided!',
                            status=status.HTTP_400_BAD_REQUEST)
