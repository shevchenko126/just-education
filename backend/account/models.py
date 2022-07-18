from django.db import models
from django.contrib.auth.models import User

from courses.inc.rating import RatingField


class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='student')

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name = "студент"
        verbose_name_plural = "студенти"


class Teacher(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='teacher')
    rating = RatingField(verbose_name='рейтинг', blank=True, null=True, editable=False)

    def __str__(self):
        return self.user.username

    def get_full_name(self):
        # used for serializers
        return self.user.username

    class Meta:
        verbose_name = "викладач"
        verbose_name_plural = "викладачі"
