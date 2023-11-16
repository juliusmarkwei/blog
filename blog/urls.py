from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import HomeView

app_name = "blog"

# router = DefaultRouter()
# router.register("", HomeView, basename="home")

# urlpatterns = router.urls

urlpatterns = [
    path("", HomeView.as_view(), name="home"),
]
