from django.contrib import admin
from registration.models import CourseRegistration


class CustomRegistrationAdmin(admin.ModelAdmin):
    list_display = ('course_title', 'student_username', 'student_fullname', 'date')
    list_select_related = ('course', 'student')

    @admin.display(description='курс')
    def course_title(self, obj):
        return obj.course.title

    @admin.display(description='username')
    def student_username(self, obj):
        return obj.student.user.username

    @admin.display(description='повне ім`я')
    def student_fullname(self, obj):
        return obj.student.user.get_full_name()


admin.site.register(CourseRegistration, CustomRegistrationAdmin)
