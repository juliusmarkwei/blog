from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Post(models.Model):
    # This class allows to select all the records that are are marked as 'published' in our database model
    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset().filter(status="published")

    # This gives a drop down options in our database model. so users can select from it
    options = (
        ("draft", "Draft"),
        ("published", "Published"),
    )

    category = models.ForeignKey(Category, on_delete=models.PROTECT, default=1)
    title = models.CharField(max_length=250)
    excerpt = models.TextField(null=True)
    content = models.TextField()
    slug = models.SlugField(max_length=250, unique_for_date="published")
    published = models.DateField(null=False, default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name="blog_post")
    status = models.CharField(max_length=10, choices=options, default="published")
    objects = models.Manager()  # default manager
    postobjects = PostObjects()  # custom manager

    # this allows us to order our recorsd in the database model according to the 'published' date
    class Meta:
        ordering = ("-published",)

    def __str__(self):
        return self.title
