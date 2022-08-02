from django.urls import path
from .views import CustomAuthData, PasswordChangeCabinet

urlpatterns = [
    path('custom_authorization/',
         CustomAuthData.as_view(),
         name='custom_authorization'),
    path('password_change_cabinet/',
         PasswordChangeCabinet.as_view(),
         name='password_change_cabinet')
]
