from datetime import datetime
from xmlrpc.client import DateTime
from django.db import models
from email import message
from django.conf import Settings
from django.contrib.auth.models import User

from courses.models import Course
from account.models import Student

# Create your models here.
class Registration(models.Model):
    course = models.ForeignKey(Course, verbose_name="Курс",
                               on_delete=models.SET_NULL,
                               blank=True,
                               null=True)
    student = models.ForeignKey(Student, verbose_name="Студент",
                               on_delete=models.SET_NULL,
                               blank=True,
                               null=True)
    data = datetime.now
    
      
    def __str__(self):
        return f'Registration({self.course}, {self.student}, {self.data})'
    
    class Meta:
        verbose_name ="Регистрація"
        verbose_name_plural ="Регистрації"   