"""just URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from courses.api import GetCourses
from notifications.api import GetNotifications
from registration.api import RegistrationData
from review.api import GetReviews
from account.views import CustomAuthData

API_version = 1

router = routers.DefaultRouter()
router.register('courses', GetCourses, 'courses')
router.register('notifications', GetNotifications, 'notifications')
router.register('registration', RegistrationData, 'registration')
router.register('reviews', GetReviews, 'reviews')

urlpatterns = [
    path('admin/', admin.site.urls),
    path(f'api/v{API_version}/', include(router.urls)),
    path('account/', include(('account.urls', 'account')))
]
