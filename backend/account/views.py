from django.shortcuts import render

from django.shortcuts import render
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth import authenticate
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
