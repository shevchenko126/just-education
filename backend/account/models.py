from email import message
from django.conf import Settings
from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Student(models.Model):
    name = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name ="Студент"
        verbose_name_plural ="Студенты"
  
  
class Teacher(models.Model):
    name = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name ="Учитель"
        verbose_name_plural ="Учителя"    
    