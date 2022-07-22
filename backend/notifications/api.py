from rest_framework import viewsets
from rest_framework.authtoken.models import Token
from rest_framework import exceptions

from .models import Notification
from .serializers import NotificationSerializer


class GetNotifications(viewsets.ModelViewSet):
    serializer_class = NotificationSerializer
    queryset = Notification.objects.all()

    def get_queryset(self):
        token_str = self.request.headers.get('Authorization')
        if not token_str or not token_str.startswith('Token '):
            raise exceptions.PermissionDenied
        try:
            token = token_str.split()[1]
            user = Token.objects.get(key=token).user
            user_qs = Notification.objects.filter(user=user)
            return user_qs
        except (IndexError, Token.DoesNotExist):
            raise exceptions.PermissionDenied
