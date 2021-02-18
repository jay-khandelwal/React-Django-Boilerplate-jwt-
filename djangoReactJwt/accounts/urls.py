from django.urls import path
from .views import ReverifyEmailApiView

urlpatterns = [
        path('verify-email/', ReverifyEmailApiView.as_view()),
    ]