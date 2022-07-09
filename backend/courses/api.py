from rest_framework import viewsets, renderers
from rest_framework.decorators import action
from rest_framework.response import Response

from .serializers import BaseCourseSerializer, SingleCourseSerializer
from .models import Course


class GetCourses(viewsets.ModelViewSet):
    serializer_class = BaseCourseSerializer
    queryset = Course.objects.all()

    def list(self, request):
        # slicing is used to re-evaluate the queryset
        serializer = self.serializer_class(self.queryset[:], many=True)
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

    @action(detail=False)
    def featured(self, request, pk=None):
        """Featured courses are at url '...courses/featured' """
        queryset = self.queryset.filter(featured=True)
        serializer = self.serializer_class(queryset, many=True)
        return Response({
            'success': True,
            'featured': True,
            'courses': serializer.data,
        })
