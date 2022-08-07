from unicodedata import category
from rest_framework import viewsets
from rest_framework.response import Response
from django.shortcuts import get_object_or_404 
from .serializers import BaseCourseSerializer, SingleCourseSerializer, CategorySerializer 
from .models import Course, CourseCategory


class GetCourses(viewsets.ModelViewSet):
    serializer_class = BaseCourseSerializer
    queryset = Course.objects.all()

    def list(self, request):
        qs = self.queryset
        if request.GET.get('featured') == '1':
            qs = qs.filter(featured=True)
       
        category_id = self.request.query_params.get('category_id')
        if category:
            qs = qs.filter(category_id=category_id)

            
        serializer = self.serializer_class(qs, many=True)
        return Response({
            'success': True,
            'courses': serializer.data,
        })

    def retrieve(self, request, *args, **kwargs):
        """Use more detailed serializer for a single Course"""
        obj = self.get_object()
        serializer = SingleCourseSerializer(obj)

        return Response({
            'success': True,
            'course': serializer.data,
        })
class GetCourseCategory(viewsets.ModelViewSet):
    serializer_class = CategorySerializer
    queryset = CourseCategory.objects.all()
    
    def list(self, request):
        
        category = CourseCategory.objects.all()
        category_serialized = self.serializer_class(category, many=True).data
        
        return Response({
            'success': True,
            'category': CategorySerializer
        })
        
    def get_object(self):
        slug = int(self.kwargs['pk'])
        print(slug)
        category = CourseCategory.objects.filter(category_id=slug)
        obj = get_object_or_404(category)
        return obj 