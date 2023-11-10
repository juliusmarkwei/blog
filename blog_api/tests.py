from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from blog.models import Post, Category
from django.contrib.auth.models import User


class PostTest(APITestCase):
    def test_view_post(self):
        url = reverse("blog_api:listcreate")
        response = self.client.get(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_post(self):
        self.test_category = Category.objects.create(name="django")
        self.testuser_1 = User.objects.create_user(
            username="test_user1", password="123456789"
        )

        data = {"title": "new", "author": 1, "excerpt": "new", "content": "new"}
        url = reverse("blog_api:listcreate")
        response = self.client.post(url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)