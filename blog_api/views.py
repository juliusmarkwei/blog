from rest_framework import generics
from blog.models import Post
from .serializers import PostSerializer
from rest_framework.permissions import AllowAny, IsAdminUser, IsAuthenticatedOrReadOnly
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from django.shortcuts import get_object_or_404


class PostViewSet(ViewSet):
    queryset = Post.postobjects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def list(self, request):
        serializer_class = PostSerializer(self.queryset, many=True)
        return Response(serializer_class.data)

    def retrieve(self, request, pk=None):
        post = get_object_or_404(self.queryset, pk=pk)
        serializer_class = PostSerializer(post)
        return Response(serializer_class.data)
