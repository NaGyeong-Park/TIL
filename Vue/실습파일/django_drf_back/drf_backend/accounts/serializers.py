from rest_framework import serializers
from django.contrib.auth import get_user_model
from articles.models import Article

User = get_user_model()


class ProfileSerializer(serializers.ModelSerializer):

    class ArticleSerializer(serializers.ModelSerializer):
        class Meta:
            model = Article
            fields = ('id', 'title', 'content',)
    
    articles = ArticleSerializer(many=True)
    like_articles = ArticleSerializer(many=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'articles','like_articles')
        read_only_fields = ('id', 'username', 'articles','like_articles')