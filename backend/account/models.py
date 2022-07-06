from django.db import models
from django.contrib.auth.models import User

from courses.inc.rating import RatingField


class Student(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name = "студент"
        verbose_name_plural = "студенти"


class Teacher(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.DecimalField(verbose_name='рейтинг', max_digits=2, decimal_places=1, blank=True, null=True)
    rating = RatingField(verbose_name='рейтинг', blank=True, null=True)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name = "вчитель"
        verbose_name_plural = "вчителя"
