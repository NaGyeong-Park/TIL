# Asynchronous processing example



기존에 django로 구현해놓은 follow와 like 기능 JS 비동기식으로 수정하기!



## follow

팔로우 언팔로우는 Django에서 M:N 테이블 수정으로 구현해주고, 이에 대한 결과를 JSON 데이터로 불러와 비동기식으로 HTML 문서의 데이터를 바꿔준다



views.py를 JSON 데이터로 수정해준다

```python
@csrf_exempt # 자꾸 오류가 나서 그냥 붙여줘버렸다...
@require_POST
def follow(request, user_pk):
    if request.user.is_authenticated:    
        person = get_object_or_404(get_user_model(), pk=user_pk)
        if person != request.user:
            if person.followers.filter(pk=request.user.pk).exists():
                person.followers.remove(request.user)
                is_followed = True # JSON에 넘겨줄 팔로우 정보
            else:
                person.followers.add(request.user)
                is_followed = False # JSON에 넘겨줄 팔로우 정보
            context = {
                "is_followed" : is_followed,
                "followers_count" : person.followers.count(), # 현재페이지 계정주의 팔로워 수
                "followings_count" : person.followings.count(), # 현재페이지 계정주의 팔로잉 수
            	# user 모델의 followings는 followers와 M:N 관계(self)
            }
            return JsonResponse(context) # JSON 데이터로 요청한 곳에 넘겨준다.
    return redirect('accounts:login')
```



profile.html을 수정해준다.

```js
// 스크립트 파일
const form = document.querySelector('#follow-form') // 제출 form을 가져와주기
const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value; 
// post로 보내는데, django는 csrftoken이 필요하므로 필요하다!

// 제출 이벤트가 생겼을 때, submit을 취소하고 POST 요청을 보낸다
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userId = event.target.dataset.userId;

    axios({
        method: 'post',
        url: `http://127.0.0.1:8000/accounts/${userId}/follow/`,
        headers: {'X-CSRFToken': csrftoken}
    }).then((res) => {
        // JSON 데이터를 받아오고, html 각 요소에 넣어준다
        const isFollowed = res.data.is_followed
        const followBtn = document.querySelector('#follow-input')
        const followersCount = res.data.followers_count
        const followingsCount = res.data.followings_count
        const followCountDiv = document.querySelector('#follow-count')
        
        // 만약 넘어온 데이터가 false면 팔로우가 되어있는 상태, 반대는 안되어있는 상태
        if (isFollowed === false){
            followBtn.value = '언팔로우'
            followBtn.setAttribute('style', 'color:red')
        } else {
            followBtn.value = '팔로우'
            followBtn.setAttribute('style', 'color:blue')
        }
        // 팔로잉수 내용도 갱신해준다.
        followCountDiv.innerText = `팔로잉 수 : ${followingsCount} / 팔로워 수 : ${followersCount}`

    })
        .catch((err) => {
        console.log(err)
    })
})
```

참고 : html 내용



```html
{% extends 'base.html' %}

{% block content %}
  <h1>{{ person.username }}의 프로필 페이지</h1>
  {% with followings=person.followings.all followers=person.followers.all %}
    <div>
      <div id="follow-count">팔로잉 수 : {{ followings|length }} / 팔로워 수 : {{ followers|length }}</div>
    </div>
    {% if user != person %}
      <div>
        {% comment %} <form action="{% url 'accounts:follow' person.pk %}" method="POST"> {% endcomment %}
        <form id="follow-form" data-user-id="{{person.pk}}">
          {% csrf_token %}
          {% if user in followers %}
            <input type="submit" value="언팔로우" id="follow-input">
          {% else %}
            <input type="submit" value="팔로우" id="follow-input">
          {% endif %}
        </form>
      </div>
    {% endif %}
  {% endwith %}

  <hr>

  <h2>{{ person.username }}가 작성한 게시글</h2>
  {% for article in person.article_set.all %}
    <div>{{ article.title }}</div>
  {% endfor %}

  <hr>

  <h2>{{ person.username }}가 작성한 댓글</h2>
  {% for comment in person.comment_set.all %}
    <div>{{ comment.content }}</div>
  {% endfor %}

  <hr>

  <h2>{{ person.username }}가 좋아요를 누른 게시글</h2>
  {% for article in person.like_articles.all %}
    <div>{{ article.title }}</div>
  {% endfor %}

  <a href="{% url 'articles:index' %}">[back]</a>
  
{% endblock content %}
```



## Like

like도 마찬가지로 articles.models.py 파일을 보면

Article 모델의 like_users가 settings.AUTH_USER_MODEL을 참조해 ManyToManyfield로 지정되어있다.



이것도 마찬가지로 views.py와 index.html을 수정해준다.

```python
@require_POST
def likes(request, article_pk):
    if request.user.is_authenticated:
        article = get_object_or_404(Article, pk=article_pk)

        if article.like_users.filter(pk=request.user.pk).exists(): # 이미 좋아하면
            article.like_users.remove(request.user) # 테이블에서 삭제
            is_liked = False # JSON으로 넘겨줄 데이터
        else:
            article.like_users.add(request.user) # 안좋아하면 테이블에 추가 
            is_liked = True # JSON으로 넘겨줄 데이터
        context = {
            "likeCount" : article.like_users.count(), # 좋아하는 사람의 수도 넘겨준다
            "is_liked" : is_liked
        }
        return JsonResponse(context)
    return redirect('accounts:login')
```

```js
const form = document.querySelector('.like-form')
const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;   

// submit 이벤트 발생시 이벤트를 취소하고, POST 요청을 보낸다
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const articleId = event.target.dataset.articleId;

    axios({
        method : 'post',
        url: `http://127.0.0.1:8000/articles/${articleId}/likes/`,
        headers: {'X-CSRFToken': csrftoken}
    })
        .then ((res) => {
        const likesCountSpan = document.querySelector(`#like-count-${articleId}`)
        const likeCount = res.data.likeCount
        const is_liked = res.data.is_liked
        const likeBtn = document.querySelector('.likeBtn')

        if (is_liked === false){
            likeBtn.innerText = '좋아요'
        }
        else {
            likeBtn.innerText = '좋아요 취소'
        }


        likesCountSpan.innerText = likeCount 
    })
})
```

참고 : html 내용

```html
{% extends 'base.html' %}

{% block content %}
  <h1>Articles</h1>
  {% if request.user.is_authenticated %}
    <a href="{% url 'articles:create' %}">[CREATE]</a>
  {% else %}
    <a href="{% url 'accounts:login' %}">[새 글을 작성하려면 로그인하세요.]</a>
  {% endif %}
  <hr>
  {% for article in articles %}
    <p>작성자 : 
      <a href="{% url 'accounts:profile' article.user.username %}">{{ article.user }}</a>
    </p>
    <p>글 번호 : {{ article.pk }}</p>
    <p>글 제목 : {{ article.title }}</p>
    <p>글 내용 : {{ article.content }}</p>
    <div>
      <form class="like-form" data-article-id="{{ article.pk }}">
        {% csrf_token %}
        {% if user in article.like_users.all %}
          <button class='likeBtn' id="like-{{ article.pk }}">좋아요 취소</button>
        {% else %}
          <button class='likeBtn' id="like-{{ article.pk }}">좋아요</button>
        {% endif %}
      </form>
      <p>
        <span id="like-count-{{ article.pk }}">
          {{ article.like_users.all|length }}
        </span>
        명이 이 글을 좋아합니다.
      </p>
    </div>
    <a href="{% url 'articles:detail' article.pk %}">[DETAIL]</a>
    <hr>
  {% endfor %}
{% endblock content %}
```

