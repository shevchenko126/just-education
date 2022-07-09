from rest_framework import serializers
from courses.models import Course


class BaseCourseSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.get_full_name')

    class Meta:
        model = Course
        fields = ['rating', 'title', 'image', 'author_name']


class SingleCourseSerializer(BaseCourseSerializer):
    class Meta:
        model = Course
        fields = BaseCourseSerializer.Meta.fields + ['description', 'featured']
        depth = 1
