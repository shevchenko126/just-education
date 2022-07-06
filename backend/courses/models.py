from django.db import models
from django.contrib.auth.models import User
from datetime import timedelta

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

        verbose_name = "Курс"
        verbose_name_plural = "Курси"


class CourseChapter(models.Model):
    chapter_title = models.CharField(verbose_name="Назва Розділу",
                                     max_length=100,)
    duration = models.DurationField(verbose_name="Тривалість",
                                    default=timedelta(days=1),
                                    help_text=('(дні год:хв:сек)'),
                                    blank=True,)
    course = models.ForeignKey(Course, verbose_name="Курс",
                               related_name="course_chapters",
                               on_delete=models.CASCADE,
                               blank=True,
                               null=True)

    def __str__(self):
        return self.chapter_title

    class Meta:
        verbose_name = "Розділ курсу"
        verbose_name_plural = "Розділи курсів"


class CourseLecture(models.Model):
    lecture_title = models.CharField(verbose_name="Назва Лекції",
                                     max_length=100,)
    duration = models.DurationField(verbose_name="Тривалість",
                                    default=timedelta(minutes=25),
                                    help_text=('(дні год:хв:сек)'),
                                    blank=True,
                                    null=True)
    course_chapter = models.ForeignKey(CourseChapter,
                                       verbose_name="Розділ курсу",
                                       related_name="course_lectures",
                                       on_delete=models.CASCADE,
                                       blank=True,
                                       null=True)

    def __str__(self):
        return self.lecture_title

    class Meta:
        verbose_name = "Лекція курсу"
        verbose_name_plural = "Лекції курсів"

