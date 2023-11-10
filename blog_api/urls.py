from django.urls import path
from .views import PostViewSet
from rest_framework.routers import DefaultRouter

app_name = "blog_api"

routers = DefaultRouter()
routers.register("", PostViewSet, basename="post")
urlpatterns = routers.urls
