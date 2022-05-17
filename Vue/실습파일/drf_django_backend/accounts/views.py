from django.shortcuts import render, redirect
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404, get_list_or_404
from movies.models import Movie, Review

# Create your views here.
User = get_user_model()
def profile(request, username):
    person = get_object_or_404(User, username=username)
    reviews = get_list_or_404(Review, userid_id=person.pk)
    movies = []
    for review in reviews:
        movies.append(get_object_or_404(Movie, id=review.movie_id))
        context = {
            'person': person,
            'reviews': reviews,
            'movies' : movies,
            }
    return render(request, 'accounts/profile.html', context)

def login(request):
    if request.user.is_authenticated:
        person = get_object_or_404(User, pk=request.user.pk)
        # return redirect('profile', pers/o//n.username)