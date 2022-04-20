# api/v1/articles/  

```python
# views.py

from django.shortcuts import get_list_or_404, get_object_or_404
from .models import Article
from .serializers import ArticleSerializer, ArticleListSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET','POST'])
def article_get(request):
    if request.method == 'GET':
        articles = get_list_or_404(Article)
        serializer = ArticleListSerializer(articles, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = ArticleSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
```

## GET

```json
// 20220420182220
// http://127.0.0.1:8000/api/v1/articles/?format=json

[
  {
    "id": 1,
    "title": "Respond often heavy fish three certainly young catch."
  },
  {
    "id": 2,
    "title": "Late through heart question."
  },
  {
    "id": 3,
    "title": "Why weight others Democrat picture never under."
  },
  {
    "id": 4,
    "title": "Break man age page year rule ahead."
  },
  {
    "id": 5,
    "title": "Course position little oil interesting behind."
  }
]
```

## POST

![image-20220420182328811](workshop.assets/image-20220420182328811.png)

## api/v1/articles/ 

```python
# views.py

@api_view(['GET','PUT','DELETE'])
def article_detail(request, article_pk):
    article = get_object_or_404(Article, pk=article_pk)
    
    if request.method == 'GET':
        serializer = ArticleSerializer(article)
        return Response(serializer.data)
    
    elif request.method == 'DELETE':
        article.delete()
        data = {
            'delete' : f'데이터 {article_pk}번이 삭제되었습니다.'
        }
        return Response(data, status=status.HTTP_204_NO_CONTENT)
    
    elif request.method == 'PUT':
        serializer = ArticleSerializer(article, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return response(serializer.data)
```

## GET

```json
// 20220420182349
// http://127.0.0.1:8000/api/v1/articles/1?format=json

{
  "id": 1,
  "title": "Respond often heavy fish three certainly young catch.",
  "content": "Imagine it wonder never others. Summer natural hour new American gun. Why stock public thought.",
  "created_at": "2006-03-25T04:44:45Z",
  "updated_at": "1992-05-21T17:37:44Z"
}
```

## PUT

![image-20220420182435747](workshop.assets/image-20220420182435747.png)

## DELETE

```json
HTTP 204 No Content
Allow: DELETE, PUT, OPTIONS, GET
Content-Type: application/json
Vary: Accept

{
    "delete": "데이터 1번이 삭제되었습니다."
}
```



# serializers.py 

```python
from rest_framework import serializers
from .models import Article

class ArticleListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title',)

class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = '__all__'
```

