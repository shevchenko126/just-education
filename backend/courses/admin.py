from django.contrib import admin
from courses.models import Course, CourseChapter, CourseLecture


admin.site.register(Course)
admin.site.register(CourseChapter)
admin.site.register(CourseLecture)
