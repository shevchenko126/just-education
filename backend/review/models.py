from django.db import models
from django.db.models import Avg
from courses.inc.rating import RatingField

from courses.models import Course


class Review(models.Model):
    course = models.ForeignKey(Course, related_name='reviews', on_delete=models.CASCADE, verbose_name='курс')
    title = models.CharField(max_length=255, verbose_name='заголовок')
    description = models.TextField(verbose_name='опис', blank=True)
    rating = RatingField(verbose_name='рейтинг')
    date = models.DateTimeField(verbose_name='дата', auto_now=True)

    def __str__(self):
        return f'{self.rating} for course {self.course.pk}'

    def save(self, *args, **kwargs):
        # only calculate ratings when creating a new review
        if not self.pk:
            super().save(*args, **kwargs)

            avg_course_rating = Review.objects.filter(course=self.course).aggregate(Avg('rating'))['rating__avg']
            self.course.rating = avg_course_rating
            self.course.save()

            avg_author_rating = Review.objects.filter(course__author=self.course.author).aggregate(
                Avg('rating'))['rating__avg']
            self.course.author.rating = avg_author_rating
            self.course.author.save()
        super().save(*args, **kwargs)

    class Meta:
        verbose_name = 'відгук'
        verbose_name_plural = 'відгуки'
