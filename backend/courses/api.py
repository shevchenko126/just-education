from rest_framework import viewsets
from rest_framework.response import Response

from .serializers import BaseCourseSerializer, SingleCourseSerializer
from .models import Course


class GetCourses(viewsets.ModelViewSet):
    serializer_class = BaseCourseSerializer
    queryset = Course.objects.all()

    def list(self, request):
        qs = self.queryset
        if request.GET.get('featured') == '1':
            qs = qs.filter(featured=True)
            
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
