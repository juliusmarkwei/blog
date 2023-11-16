from django.views.generic import TemplateView
from rest_framework.viewsets import ViewSet
from rest_framework.permissions import IsAuthenticated
from django.http import HttpResponse
from .models import Post


class HomeView(TemplateView):
    template_name = "index.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["post_data"] = Post.objects.all()
        return context
