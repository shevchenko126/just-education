from django.contrib import admin
from .models import Notification


class CustomNotificationAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'date')
    ordering = ('-date',)
    search_fields = ('title', 'description')


admin.site.register(Notification, CustomNotificationAdmin)
