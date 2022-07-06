from django.contrib import admin
from .models import Review


class CustomReviewAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'course', 'rating', 'date')
    search_fields = ('title', 'description', 'course', 'rating', 'date')


admin.site.register(Review, CustomReviewAdmin)
