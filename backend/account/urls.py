from django.urls import path
from .views import password_reset, password_forgot, password_change

urlpatterns = [
    path('password_forgot', password_forgot, name='password_forgot'),
    path('password_reset', password_reset, name='password_reset'),
    path('password_change', password_change, name='password_change'),
]
