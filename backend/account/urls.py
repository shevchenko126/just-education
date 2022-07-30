from django.urls import path
from .views import PasswordReset, PasswordForgot, PasswordChange

urlpatterns = [
    path('password_forgot', PasswordForgot.as_view(), name='password_forgot'),
    path('password_reset', PasswordReset.as_view(), name='password_reset'),
    path('password_change', PasswordChange.as_view(), name='password_change'),
]
