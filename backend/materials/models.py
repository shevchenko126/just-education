from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User


class Material(models.Model):
    TYPE_CHOICES = (("video", "Відео"), ("read", "Читання"), ("code", "Код"))
    type = models.CharField(verbose_name="Тип", max_length=100, blank=False, null=False, choices=TYPE_CHOICES)
    file = models.FileField(verbose_name="Файл", upload_to="uploads/", storage=None, max_length=100, blank=True,
                            null=True)
    format = models.CharField(verbose_name="Формат", max_length=20, blank=True, null=True)
    create_date = models.DateTimeField(verbose_name="Дата створення", editable=False)
    name = models.CharField(verbose_name="Назва", max_length=200, blank=False, null=False)
    url = models.CharField(verbose_name="Перейти до курсу", max_length=300, blank=True, null=True)
    author = models.ForeignKey(User, verbose_name="Автор", on_delete=models.SET_NULL, blank=True, null=True,
                               related_name="materials")
    duration = models.DurationField(verbose_name="Тривалість")

    def save(self, *args, **kwargs):
        self.create_date = timezone.now()
        return super(Material, self).save(*args, **kwargs)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Матеріал"
        verbose_name_plural = "Матеріали"
