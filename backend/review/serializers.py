from rest_framework import serializers

from courses.models import Course
from .models import Review


class ReviewSerializer(serializers.ModelSerializer):
    course_id = serializers.PrimaryKeyRelatedField(source='course', queryset=Course.objects.all())
    user_id = serializers.PrimaryKeyRelatedField(read_only=True, default=serializers.CurrentUserDefault())

    class Meta:
        model = Review
        fields = ['course_id', 'user_id', 'title', 'description', 'rating', 'date']

    def save(self, **kwargs):
        kwargs['user'] = self.fields['user_id'].get_default()
        kwargs['rating'] = int(self.validated_data['rating'])
        super().save(**kwargs)
