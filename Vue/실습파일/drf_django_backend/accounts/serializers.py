from rest_framework import serializers
from django.contrib.auth import get_user_model
from movies.models import Movie, Review

User = get_user_model()

class ProfileSerializer(serializers.ModelSerializer):
    
    class ReviewSerializer(serializers.ModelSerializer):
        class Meta:
            model = Review
            fields = all

    class MovieSerializer(serializers.ModelSerializer):
        class Meta:
            model = Movie
            fields = all
    
    movies = MovieSerializer(many=True)
    reviews = ReviewSerializer(many=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'movies', 'reviews',)