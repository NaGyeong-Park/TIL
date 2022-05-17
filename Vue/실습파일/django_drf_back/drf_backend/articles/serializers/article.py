from rest_framework import serializers
from drf_backend.articles.models import Article

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article