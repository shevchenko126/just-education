from rest_framework import viewsets, exceptions, pagination
from rest_framework.response import Response
from django.core.exceptions import ObjectDoesNotExist
from django.db import IntegrityError

from courses.models import Course
from review.models import Review
from review.serializers import ReviewSerializer


class ReviewPaginator(pagination.PageNumberPagination):
    page_size = 10


class GetReviews(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    pagination_class = ReviewPaginator

    def list(self, request, *args, **kwargs):
        """Return paginated reviews filtered by query-params 'course_id' and 'page'"""
        page = self.paginate_queryset(self.get_queryset())
        serializer = self.get_serializer(page, many=True)
        return Response({'success': True,
                         'count': self.paginator.page.paginator.count,
                         'page_number': self.paginator.page.number,
                         'total_pages': self.paginator.page.paginator.num_pages,
                         'reviews': serializer.data})

    def get_queryset(self):
        """Return reviews for specific course if it exists. Otherwise, 404 with detail"""
        course_id = self.request.query_params.get('course_id')
        if course_id:
            if Course.objects.filter(pk=course_id).exists():
                return self.queryset.filter(course_id=course_id)
            else:
                raise exceptions.NotFound('No such course')
        return self.queryset.all()

    def create(self, request, *args, **kwargs):
        """ Create review by the current user if he is registered to the course. Maximum one per user per course"""
        if request.auth is None:
            raise exceptions.NotAuthenticated

        course_id = request.data.get('course_id')
        try:
            request.user.student.registrations.get(course_id=course_id)
        except (AttributeError, ObjectDoesNotExist):
            raise exceptions.PermissionDenied('You are not a student of this course')
        except ValueError:
            raise exceptions.ValidationError('The course_id must be an integer')
        try:
            return super().create(request, *args, **kwargs)
        except IntegrityError:
            raise exceptions.PermissionDenied('You have already rated this course')
