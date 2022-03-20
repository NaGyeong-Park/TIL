# Django01

## Web framework

### Static web page / Dynamic web page

- 정적 웹 페이지 - flat page
  - 서버에 미리 저장된 파일이 사용자에게 그대로 전달
  - 서버가 정적 웹 페이지에 대한 요청을 받은 경우 서버는 추가적인 처리 과정 없이 클라이언트에게 응답을 보냄
  - 모든 상황에서 모든 사용자에게 동일한 정보 표시
- 동적 웹 페이지
  - 서버가 추가적인 처리 과정 이후 클라이언트에게 응답
  - 방문자와 상호작용 > 페이지내용은 그때그때 다름
  - 서버 사이드 프로그래밍언어(파이썬, 자바, C++ 등) 사용, 파일을 처리하고 데이터베이스와의 상호작용 이루어짐

### Framework

- 프로그래밍에서 특정 운영 체제를 위한 응용 프로그램 표준 구조를 구현하는 클래스와 라이브러리 모임
- 데이터베이스 연동, 템플릿 형태의 표준, 세션 관리, 코드 재사용 등의 기능 포함
- 동적인 웹 페이지, 웹 에플리케이션, 웹 서비스 개발 보조용으로 만들어지는 Application framework의 일종

### Framework Architecture

- __MVC Design Pattern (model-view-controller)__
- 사용자 인터페이스로부터 프로그램 로직을 분리하여 애플리케이션의 시각적 요소나 이면에서 실행되는 부분을 서로 영향없이 쉽게 고칠 수 있는 애플리케이션을 만들 수 있다.
- Django - __MTV Pattern__

### MTV Pattern

- Model
  - 응용프로그램의 데이터 구조 정의
  - 데이터베이스의 기록을 관리(추가, 수정, 삭제)
- Template(view)
  - 파일의 구조나 레이아웃 정의
  - 실제 내용을 보여주는 데 사용
- View(controller)
  - HTTP 요청 수신, HTTP 응답 반환
  - Model을 통해 요청을 충족시키는데 필요한 데이터에 접근
  - template에게 응답의 서식 설정을 맡김

## 시작하기

- 가상환경 설정

  `python -v venv venv`  

- 가상환경 실행

  `Source venv/Scrips/activate`

- install

  `pip install django==3.2.10`

- 프로젝트 만들기

  `python-admin startproject <프로젝트이름> .`

- 프로젝트 서버 실행

  `python mange.py runserver`

- 애플리케이션 만들기

  `python manage.py startapp <앱이름>`

### 프로젝트 구조

- __ init __ : python에게 이 디렉토리를 하나의 python 패키지로 다루도록 지시
-  asgi.py : Django 앱이 비동기식 웹 서버와 연결 및 소통 도움
- urls.py : 사이트의 url과 적절한 views의 연결 지정
- manage.py : django 프로젝트와 다양한 방법으로 상호작용하는 커맨드라인 유틸리티

### Project & Application

- __Project__
  - 프로젝트는 앱의 집합
  - 앱은 여러 프로젝트에 있을 수 있음
- __Application__
  - 앱은 실제 요청을 처리하고 페이지를 보여주고 하는 등 역할 담당
  - 일반적으로 앱은 하나의 역할 및 기능 단위로 작성

## 요청과 응답

- url : HTTP 요청을 알맞은 view로 전달
- view : HTTP 요청 수신하고 HTTP 응답 반환 함수 작성
  - Model을 통해 요청에 맞는 필요 데이터 접근
  - Template에게 HTTP 응답 서식 맡김
- Templates: 실제 내용을 보여주는데 사용되는 파일

## Template

- 데이터 표현을 제어하는 도구이자 표현에 관련된 로직
- __DTL__ : Django Template Language
  - built-in template system
  - 조건, 반복, 변수 치환, 필터 등 기능 제공
  - 프로그래밍적 로직이 아니라 프레젠테이션을 표현하기 위한 것

### DTL Syntax

- __Variable__
  - `{{variable}}`
  - render()를 사용해 views.py에서 정의한 변수를 template 파일로 넘겨 사용
  - dot을 사용해 변수 속성에 접근 가능
  - render(A,B,C)의 C인자, 딕셔너리 형태로 넘겨줌
-  __Filters__
  - `{{variable | filter}}` : 표시한 변수 수정시 사용
  - lower, 등 chained가 가능
- __Tags__
  - 출력 텍스트를 만들거나, 반복 또는 논리 수행하여 제어 흐름 등 
  - `{%if%}{%endif%}`
- __Comments__
  - `{# #}`
  - 라인의 주석을 표현하기 위해 사용
  - 여러 주석은 {%comment%}{%endcomment%} 사이

__코드 작성 순서 url.py > views.py > templates__

### 템플릿 상속

- `{% extend 'base.html'%}` : 자식템플릿이 부모 템플릿 확장 알림
- `{%block content%} {% endblock %}` : 하위 템플릿에서 재지정 할 수 있는 블록 정의
- settings.py의 TEMPLATES `'DIRS': [BASE_DIR/'base.html'],` 

### Template Tag - "include"

- `{% include '' %}`
- 템플릿을 로드하고 현재 페이지로 렌더링
- 템플릿 내에 다른 템플릿을 포함하는 방법

### Django template system (Django 설계 철학)

- 표현과 로직(view)을 분리
- 중복을 배제





## HTML Form

### HTML "form" element

- 웹에서 사용자 정보를 입력하는 여러 방식 제공, 사용자로부터 할당된 데이터를 서버로 전송하는 역할 담당
- 핵심 속성(attribute)
  - action : 입력 데이터가 전송될 URL 지정
  - method : 입력 데이터 전달 방식 지정

### HTML "input" element

- 사용자로부터 데이터 입력 받기위해 사용
- 핵심 속성
  - name
  - 중복 가능
  - GET 방식에서 URL에서 ?key=value&key=value 형식으로 전달

### HTML "label" element

- 사용자 인터페이스 항목에 대한 설명을 나타냄

- _label-input 연결_

  - input에 id 부여
  - label에는 input의 id와 동일한 값의 for 속성이 필요

  =>HTML "for" attribute

  - for 속성의 값과 일치하는 id를 가진 문서의 첫 번쨰 요소 제어

  => HTML "id" attribute

  - 전체 문서에서 고유해야하는 식별자 정의

### HTTP : HyperText Transfer Protocol

- 주어진 리소스가 수행 할 작업을 나타내는 request methods를 정의
- GET, POST, PUT, DELETE

#### GET

- 서버로부터 정보를 __조회__ 하는데 사용
- 데이터를 가져올 때만 사용해야 함
- Query String Parameters를 통해 전송
- `message = request.GET.get('message')`

## URL

- Variavble Routing : URL 주소를 변수로 사용하는 것
- `<int:user_pk>`
- str / int / slug

### Naming URL patterns

- `path('index/', views.index, name='index'),`
- `<a href="{% url 'index' %}">`



# Django02

## Model

- Django는 model을 통해 데이터에 접속하고 관리
- 웹 에플리케이션의 데이터를 __구조화__하고 __조작__하기 위한 도구
- 일반적으로 각각의 model은 하나의 데이터베이스 테이블에 매핑 됨

### Database

- 데이터베이스 : 체계화된 데이터의 모임
- 쿼리 : 데이터를 조회하기 위한 명령어 / 조건에 맞는 데이터를 추출하거나 조작하는 명령어

### Database의 기본구조

- 스키마 : 자료의 구조, 표현방법, 관계 등을 정의한 __구조__
- 테이블
  - 열 : 필드 or 속성
  - 행 : 레코드 or 튜플

## ORM

- Object-Relational-Mapping
- 장점 : SQL 잘 몰라도 DB조작 가능, SQL의 절차적인 접근이 아닌 객체지향적 접근으로 인한 높은 생산성
- 단점 : 완전한 서비스를 구현하기 어려운 경우가 있음
- __현대 웹 프레임워크의 요점은 웹 개발의 속도를 높이는 것__=> _생산성_

```python
class Article(models.Model):
    name = models.CharField(max_length=10)
    adress = models.TextField()
```



## Migrations

- __Django가 model에 생긴 변화를 반영하는 방법__

```python
# migration을 만들고 싶다
python manage.py makemigrations
# 적용되지않은 모든 migration file을 데이터베이스에 적용
python manage.py migrate
# 각각의 migration이 어떻게 sql로 변환되었는지 볼 수 있음
python manage.py sqlmigrate articles 0001
# 각각의 migration이 적용이 되었는지 안되었는지
python manage.py showmigrations

python manage.py shell
from articles.models import Article
Article.objects.all()
```

#### auto_now_add vs auto_now

- auto_now_add : 최초 생성 일자
- auto_now : 최종 수정 일자

## Database API

- DB를 조작하기 위한 도구
- `Article.objects.all()`

## CRUD

- READ : all(), get(),filter()

```bash
# CREATE
# 데이터 생성 방법 1 : 인스턴스를 만들고 save 하는 방법
>>> article = Article()
>>> article.title = "첫번째 글"  
>>> article.content = "배고프다 냠냠.."
>>> article.save()
>>> Article.objects.all()
>>> Article.objects.all()
<QuerySet [<Article: Article object (1)>]>
>>> ariticle = Article.objects.all()[0]
>>> article.title 
'첫번째 글'
>>> article.content
'배고프다 냠냠..'

# 데이터 생성 방법 2 : Keyword 인자를 넘기는 방식
>>> article = Article(title="두번째 글", content="점심 뭐먹지")
>>> article.save()
>>> Article.objects.all()
<QuerySet [<Article: Article object (1)>, <Article: Article object (2)>]>

# 데이터 생성 방법 3 : creat() 이용하는 방법
>>> Article.objects.create(title="세번째 글", content="집밥먹나")
<Article: Article object (3)>
>>> Article.objects.all()
<QuerySet [<Article: Article object (1)>, <Article: Article object (2)>, <Article: Article object (3)>]>

# pip에 설치한 리스트 저장해주기
pip freeze > requirements.txt

# READ
# 데이터 가져오기 1 : all
In [4]: article_1 = Article.objects.all()[0]
In [5]: article_1.id
Out[5]: 1

# 데이터 가져오기 2 : get
# title 값이 같은 것 추가
In [6]: article = Article.objects.get(id=1)
In [7]: article.title
Out[7]: '첫번째 글'
    
# get으로 가져오면 오류
In [12]: article = Article.objects.get(title='첫번째 글')
--------------------------------------------------------------------------
MultipleObjectsReturned                  Traceback (most recent call last)
...
MultipleObjectsReturned: get() returned more than one Article -- it returned 2!

# 데이터 가져오기 3 : filter 
# filter로 가져올 수 있음
n [15]: articles = Article.objects.filter(title='첫번째 글')
In [16]: articles
Out[16]: <QuerySet [<Article: 첫번째 글>, <Article: 첫번째 글>]>

In [17]: articles = Article.objects.filter(title__contains='첫')
In [18]: articles
Out[18]: <QuerySet [<Article: 첫번째 글>, <Article: 첫번째 글>]>

# UPDATE
In [20]: article = Article.objects.get(pk=4)
In [22]: article.title = '네번째 글'
In [23]: article.save()

# DELETE
In [27]: article.delete()
Out[27]: (1, {'articles.Article': 1})

In [28]: Article.objects.all()
Out[28]: <QuerySet [<Article: 첫번째 글>, <Article: 두번째 글>, <Article: 세번째 글>]>
```

## 관리자모드

```bash
python manage.py createsuperuser
Username (leave blank to use 'july'):       
Email address: july@test.com         
Password: 1234 
Password (again): 1234
Bypass password validation and create user anyway? [y/N]: y      
Superuser created successfully.
```

```python
# admin py
from .models import Article

admin.site.register(Article)
```



__{% csrf_token%}__

- "redirect()": 새 URL로 요청을 다시 보냄
- `return redirect('articles:index')`