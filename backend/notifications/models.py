from django.db import models
from django.contrib.auth import get_user_model

UserModel = get_user_model()


class Notification(models.Model):
    title = models.CharField(verbose_name='заголовок', max_length=255)
    description = models.TextField(verbose_name='опис', blank=True)
    date = models.DateTimeField(verbose_name='дата', auto_now=True)
    user = models.ForeignKey(UserModel, related_name='notifications', on_delete=models.CASCADE)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'cповіщення'
        verbose_name_plural = 'сповіщення'
