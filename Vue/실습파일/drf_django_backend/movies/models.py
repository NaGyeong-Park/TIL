from django.db import models
from django.conf import settings
# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=100)
    poster_path = models.TextField()
    ost = models.TextField()
    def __str__(self):
        return self.title

class Review(models.Model):
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    watched_date = models.DateField(auto_now_add=True)
    watched_at = models.TextField()
    watched_weather = models.TextField()
    watched_with = models.TextField()
    content = models.TextField()
    userid = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)