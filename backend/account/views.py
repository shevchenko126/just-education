from django.shortcuts import render
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth import authenticate


class CustomAuthData(ObtainAuthToken):
    def post(self, request, *args, **kwargs):

        user_data = {
            "username": request.data['username'].lower(),
            "password": request.data['password']
        }

        try:
            user = authenticate(**user_data)
            resp = {
                    "sucess": True,
                    "token": Token.objects.filter(user=user).first().key,
                    "user_id": user.id,
                    "user_email": user.email,
                    "is_teacher": user.profile.is_teacher,
                    "is_student": user.profile.is_student
                    },
        except:
            resp = {
                "sucess": False,
                "toke": "",
                "user_id": 0,
                "user_email": "",
                "is_teacher": False,
                "is_student": False
            }
        return Response(resp)

    def get(self, request, *args, **kwargs):

        token = request.data['token']
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
            "is_teacher": user.profile.is_teacher,
            "is_student": user.profile.is_student
        })
