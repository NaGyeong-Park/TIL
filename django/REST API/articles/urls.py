from django.urls import path
from . import views

urlpatterns = [
    path('', views.article_get),
    path('<int:article_pk>', views.article_detail)
    # path('json-2/', views.article_json-2),
    # path('json-3/', views.article_json-3),
]
