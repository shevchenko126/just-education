from django.db import models
from django.contrib.auth.models import User

from courses.inc.rating import RatingField


class Student(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name ="Студент"
        verbose_name_plural ="Студенти"
  
 
class Teacher(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = RatingField(verbose_name='рейтинг', blank=True, null=True)

    def __str__(self):
        return self.user.username

    def get_full_name(self):
        # used for serializers
        return self.user.username

    class Meta:
        verbose_name ="Викладач"
        verbose_name_plural ="Викладачі"    
