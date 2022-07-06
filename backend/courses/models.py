from django.db import models
from account.models import Teacher
from courses.inc.rating import RatingField


class Course(models.Model):
    title = models.CharField(verbose_name="назва", max_length=50)
    image = models.FileField(verbose_name="зображення",
                             upload_to='materials',
                             max_length=255,
                             blank=True)
    description = models.TextField(verbose_name="опис", blank=True)
    author = models.ForeignKey(Teacher, verbose_name="автор",
                               on_delete=models.SET_NULL,
                               blank=True,
                               null=True)
    rating = RatingField(verbose_name='рейтинг', blank=True, null=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "курс"
        verbose_name_plural = "курси"
