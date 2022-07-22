from rest_framework import viewsets, permissions
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from . models import CourseRegistration
from rest_framework.authtoken.models import Token
from . serializers import CourseRegistrationSerializer
from courses.models import Course
from account.models import Student


class RegistrationData(viewsets.ModelViewSet):
    serializer_class = CourseRegistrationSerializer
    queryset = CourseRegistration.objects.all()

    def list(self, request):

        try:
            course = Course.objects.get(pk=self.request.query_params.get('course'))
            student = Student.objects.get(pk=self.request.query_params.get('student'))
            course_registration = CourseRegistration.objects.get(student=student, course=course)
            is_registered = True
        except:
            is_registered = False

        return Response({
            'is_registered' : is_registered
        })

    def create(self, request, *args, **kwargs):
        token = request.headers.get('token', 'u')
        user = Token.objects.get(key=token).user

        course_registration = CourseRegistration(
            course = Course.objects.get(pk=request.POST.get('course')),
            student = Student.objects.get(user=user)
        )
        course_registration.save()
        return Response({
            "success": 1
        })

