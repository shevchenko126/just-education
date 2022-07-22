from datetime import datetime
from django.db import models

from courses.models import Course
from account.models import Student

# Create your models here.
class CourseRegistration(models.Model):
    course = models.ForeignKey(Course, verbose_name="Курс",
                               on_delete=models.SET_NULL,
                               related_name='registrations',
                               blank=True,
                               null=True)
    student = models.ForeignKey(Student, verbose_name="Студент",
                                on_delete=models.SET_NULL,
                                related_name='registrations',
                                blank=True,
                                null=True)
    data = datetime.now

    def __str__(self):
        return f'Registration({self.course}, {self.student}, {self.data})'

    class Meta:
        verbose_name = "Регистрація"
        verbose_name_plural = "Регистрації"
