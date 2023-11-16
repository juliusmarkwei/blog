from django.urls import path
from django.views.generic import TemplateView
from rest_framework.routers import DefaultRouter

app_name = "blog"

router = DefaultRouter()
router.register("", TemplateView, basename="post")

urlpatterns = router.urls
