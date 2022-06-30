from django.db import models
from django.contrib.auth.models import User


class Course(models.Model):
    title = models.CharField(verbose_name="Назва", max_length=50)
    image = models.FileField(verbose_name="Зображення",
                             upload_to=None,
                             max_length=255,
                             blank=True,
                             null=True)
    description = models.TextField(verbose_name="Опис", blank=True, null=True)
    author = models.ForeignKey(User, verbose_name="Автор",
                               on_delete=models.SET_NULL,
                               blank=True,
                               null=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Курс"
        verbose_name_plural = "Курси"
