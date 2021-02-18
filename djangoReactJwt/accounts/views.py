from rest_framework import generics
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework import status
from django.utils.translation import ugettext_lazy as _

from .serializers import ReverifyEmailSerializer
from allauth.account.models import EmailAddress


class ReverifyEmailApiView(generics.GenericAPIView):
    serializer_class=ReverifyEmailSerializer
    permission_classes=[
            permissions.AllowAny,
        ]
        
    def send_email(self):
        if self.serializer.validated_data['is_verified']:
            return Response({"detail": _("Your email is already verified.")},
                            status=status.HTTP_200_OK)
        elif self.serializer.validated_data['is_verified'] == False:
            try:
                self.user = self.serializer.validated_data['user']
                email_address = EmailAddress.objects.get(
                    user=self.user,
                    email=self.user.email,
                )
                email_address.send_confirmation(self.request)
                return Response({'detail':_("Verification email has been sent.")}, status=status.HTTP_200_OK)
            except EmailAddress.DoesNotExist:
                return Response({"detail": _("Something wents wrong.")},
                            status=status.HTTP_403_FORBIDDEN)
        else:
           return Response({"detail": _("Something wents wrong.")},
                            status=status.HTTP_403_FORBIDDEN)
            
      
    def post(self, request, *args, **kwargs):
        self.request = request
        self.serializer = self.get_serializer(data=self.request.data, context={'request': request})
        self.serializer.is_valid(raise_exception=True)
        return self.send_email()
