from django.shortcuts import render
from django.contrib.auth import get_user_model
from rest_framework.decorators import api_view
from django.shortcuts import get_object_or_404

# Create your views here.
User = get_user_model()
def profile(request, username):
    person = get_object_or_404(User, username=username)
    context = {
        'person': person,
    }
    return render(request, 'accounts/profile.html', context)