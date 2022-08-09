from django.db import models
from django.db.models import UniqueConstraint

from courses.models import Course
from account.models import Student


class CourseRegistration(models.Model):
    course = models.ForeignKey(Course, verbose_name='курс',
                               on_delete=models.CASCADE,
                               related_name='registrations')
    student = models.ForeignKey(Student, verbose_name='студент',
                                on_delete=models.CASCADE,
                                related_name='registrations')
    date = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'реєстрація ({self.course}, {self.student})'

    class Meta:
        verbose_name = 'реєстрація'
        verbose_name_plural = 'реєстрації'
        constraints = [
            UniqueConstraint(fields=('course', 'student'), name='one_reg_per_student')
        ]
