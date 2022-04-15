# Start

가상환경 설정 > 프로젝트 만들기 > app 만들기 - articles, accounts

__중요__

- settings.py : `AUTH_USER_MODEL = 'accounts.User'`
- accounts/admin.py : `from django.contrib.auth.admin import UserAdmin / from .models import User/admin.site.register(User, UserAdmin)`



# 기본 셋팅

- settings에 앱 등록 / templates base.html

#### accounts와 articles의 urls.py 만들어 주고 templates 폴더 만들기

```html
<!--templates/base.html-->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>movies</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
</head>
<body>
  {% block content %}
  {% endblock content %}
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
</body>
</html>
```

#### 각 app에 forms.py 만들어주기, admin 등록해주기

#### Model들 만들어주기

```python
# accounts/models.py
from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass

# accounts/forms.py
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from django.contrib.auth import get_user_model

class CustomUserChangeForm(UserChangeForm):
    # password = None
    class Meta:
        model = get_user_model()
        fields = ('email', 'first_name', 'last_name')
    
    
class CustomUserCreationForm(UserCreationForm):

    class Meta(UserCreationForm.Meta):
        model = get_user_model()
        fields = UserCreationForm.Meta.fields + ('email',)
        
# admin.py
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User
# Register your models here.


admin.site.register(User, UserAdmin)
```

```python
# articles/models.py
from django.db import models
from django.conf import settings

class Article(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=10)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str(self):
        return self.title
    

class Comment(models.Model):
    article = models.ForeignKey(Article, on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    content = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.content

    
# articles/forms.py
from django import forms
from .models import Article, Comment

class ArticleForm(forms.ModelForm):
    class Meta:
        model = Article
        exclude = ('user',)

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ('content',)
        
# admin
from django.contrib import admin
from .models import Article, Comment
# Register your models here.

class ArticleAdmin(admin.ModelAdmin):
    list_display = ('pk', 'title', 'content', 'created_at', 'updated_at',)


admin.site.register(Article, ArticleAdmin)
admin.site.register(Comment)
```



## => migrate! 

=> 그럼 `python manage.py createsuperuser`해서 좀 둘러보자

=> 마지막 : urls에서 각자로 가는 url 만들어주기

```python
"""movies URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
# urls.py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('articles.urls')),
    path('articles/', include('articles.urls')),
]
```



# article

### urls.py

```python
from django.urls import path
from . import views

app_name='articles'
urlpatterns = [
    path('', views.index, name='index'),
    path('create/', views.create, name='create'),
    path('<int:pk>/', views.detail, name='detail'),
    path('<int:pk>/delete/', views.delete, name='delete'),
    path('<int:pk>/update/', views.update, name='update'),
]
```

### views.py

```python
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.http import require_safe, require_POST, require_http_methods
from .models import Article, Comment
from .forms import ArticleForm, CommentForm
# Create your views here.

@require_safe
def index(request):
    articles = Article.objects.all()[::-1]
    context = {'articles' : articles }
    return render(request, 'articles/index.html', context)


@require_http_methods(['GET', 'POST'])
def create(request):
    if request.method == "POST":
        form = ArticleForm(request.POST)
        if form.is_valid():
            article = form.save(commit=False)
            article.user = request.user
            article.save()
            return redirect('articles:detail', article.pk)
    else:
        form = ArticleForm()
    context = {'form':form,}
    return render(request, 'articles/create.html', context)

@require_safe
def detail(request, pk):
    article = get_object_or_404(Article, pk=pk)
    comment_form = CommentForm()
    comments = article.comment_set.all()
    context = {
        'article' : article,
        'comment_form' : comment_form,
        'comments' : comments,
    }
    return render(request,'articles/detail.html',context)

@require_POST
def delete(request,pk):
    article = get_object_or_404(Article, pk=pk)
    if request.user.is_authenticated:
        if request.user == article.user:
            article.delete()
            return redirect('articles:index')
    return redirect('articles:detail', article.pk)

@login_required
@require_http_methods(['GET', 'POST'])
def update(request, pk):
    article = get_object_or_404(Article, pk=pk)
    if request.user == article.user:
        if request.method == 'POST':
            form = ArticleForm(request.POST, instance=article)
            if form.is_valid():
                article = form.save()
                return redirect('articles:detail', article.pk)
        else:
            form = ArticleForm(instance=article)
    else:
        return redirect('articles:index')
    context = {
        'article': article,
        'form': form,
    }
    return render(request, 'articles/update.html', context)
```

### templates

#### index

```html
{% extends 'base.html' %}
{% block content %}
<h1>Movies</h1><br>
<a href="{% url 'articles:create' %}">작성하기</a>
<hr>
{% for article in articles %}
  <p> 작성자 : {{article.user}}</p>
  <a href="{% url 'articles:detail' article.pk %}"> 제목 : {{article.title}}</a><hr>
{% endfor %}
{% endblock content %}
```

#### create

```html
{% extends 'base.html' %}
{% block content %}
<h1>글 작성하기</h1>
<hr>
<form action="{% url 'articles:create' %}" method="POST">
  {% csrf_token %}
  {{form.as_p}}
  <input type="submit">
</form>
{% endblock content %}
```

#### detail

```html
{% extends 'base.html' %}
{% block content %}
  <h1>DETAIL</h1><br>
  <h3>{{ article.title }}</h3>
  <p>작성자 : {{ article.user }}</p>
  <hr>
  <p>내용 : {{ article.content }}</p>
  <p>작성 시각 : {{ article.created_at }}</p>
  <p>수정 시각 : {{ article.updated_at }}</p>
  <hr>
  <div class="container">
    <a role="button" class="btn btn-primary" href="{% url 'articles:index' %}">목록</a>
    <form action="{% url 'articles:update' article.pk %}" method="POST">
      {% csrf_token %}
      <button class="btn btn-primary" type="submit">수정</button>
    </form>
    <form action="{% url 'articles:delete' article.pk %}" method="POST">
      {% csrf_token %}
      <button class="btn btn-primary" type="submit">삭제</button>
    </form>
  </div>
{% endblock content %}
```

#### update - 손 봐야한다.

```html
{% extends 'base.html' %}
{% block content %}
  <h1>수정하기</h1>
  <hr>
  <form action="{% url 'articles:update' article.pk %}" method="POST">
    {% csrf_token %}
    {{ form.as_p }}
    <input type="submit">
  </form>
  <a href="{% url 'articles:detail' article.pk %}">back</a>
{% endblock content %}
```