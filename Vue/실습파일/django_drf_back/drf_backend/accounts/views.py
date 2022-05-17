from django.shortcuts import render
from .serializers import ProfileSerializer
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from rest_framework.response import Response 
from rest_framework.decorators import api_view
# Create your views here.

User = get_user_model()
@api_view(['GET'])
def profile(request, username):
    user = get_object_or_404(User, username=username)
    serializer = ProfileSerializer(User)
    return Response(serializer.data)