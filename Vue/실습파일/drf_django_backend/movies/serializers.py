from rest_framework import serializers
from movies.models import Movie, Review

class MovieSerializer(serializers.Serializer):
    class Meta:
        model = Movie

class ReviewSerializer(serializers.Serializer):
    class Meta:
        model = Review