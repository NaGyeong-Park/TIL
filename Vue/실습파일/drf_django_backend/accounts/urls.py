from django.urls import path, include
from . import views

urlpatterns = [
    # path('login/', views.login, name='login'),
    path('<username>/', views.profile, name='profile'),
    # path('<int:user_pk>/follow/', views.follow, name='follow'),
]