from dataclasses import field
from rest_framework import serializers
from courses.models import Course, CourseChapter, CourseLecture, CourseCategory


class BaseCourseSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.get_full_name')

    class Meta:
        model = Course
        fields = ['rating', 'title', 'image', 'author_name']


class LectureSerializer(serializers.ModelSerializer):
    class Meta:
        model = CourseLecture
        fields = ['id', 'title', 'duration']


class ChapterSerializer(serializers.ModelSerializer):
    lectures = LectureSerializer(source='chapter_lectures', many=True)

    class Meta:
        model = CourseChapter
        fields = ['id', 'title', 'duration', 'lectures']


class SingleCourseSerializer(BaseCourseSerializer):
    chapters = ChapterSerializer(source='course_chapters', many=True)

    class Meta:
        model = Course
        fields = BaseCourseSerializer.Meta.fields + ['description', 'featured', 'chapters']

class CategorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CourseCategory
        fields = ['id', 'title', 'category',]
    