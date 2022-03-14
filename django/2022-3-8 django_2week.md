## 2022-03-08

# Django Model

### Model

- Django 데이터 구조를 미리 잡아두는게 모델
- 단일한 데이터에 대한 정보 가짐
  - 사용자가 저장하는 데이터들의 필수적인 필드+동작 포함
- 저장된 데이터베이스의 구조(layout)
- Django는 __model을 통해 데이터에 접속하고 관리__

### Database

- 데이터베이스(DB) : 체계화된 데이터의 모임
- 쿼리(Query) : 데이터 조회하기 위한 명령어
  - 조건에 맞는 데이터를 추출하거나 조작하는 명령어
  - 쿼리를 날린다 => DB조작한다(SQL 작성한다)
- 스키마(Shema) : 데이터베이스에서 자료의 구조, 표현방법, 관계 등을 정의한 구조
- 테이블(Table) : 표
  - 열 : 필드 or 속성
  - 행 : 레코드 or튜플

![image-20220308092114119](django_2week.assets/image-20220308092114119.png)



#### Database 기본구조

- PK(기본키) : 각 행(레코드)의 고유값, Primary key, 반드시 설정, 관리 및 관계설정시 주요하게 활용





## ORM(객체관계매핑)

- Object-Relational-Mapping
- 객체지향 프로그래밍 언어를 사용해 호환되지 않는 유형의 시스템 간에(Django-SQL)데이터를 변환하는 프로그래밍 기술

![image-20220308093547986](django_2week.assets/image-20220308093547986.png)

#### ORM의 장점과 단점

- 장점
  - SQL 잘 알지못해도 DB 조작 가능
  - SQL의 절차적 접근이 아닌 객체 지향적 접근으로 인한 높은 생산성
- 단점
  - ORM 만으로 완전한 서비스를 구현하기 어려운 경우 있음
- __현대 웹 프레임워크 요점은 웹 개발의 속도를 높이는 것 (생산성)__

### models.py 작성

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



- object? : object manager : 내가 만든 템플릿에서 매니저가 메소드로 해줘~
- QuerySet에 들어있는 하나하나가 다 객체구나~ 객체목록



### 관리자모드

```bash
python manage.py createsuperuser
Username (leave blank to use 'july'):       
Email address: july@test.com         
Password: 1234 
Password (again): 1234
Bypass password validation and create user anyway? [y/N]: y      
Superuser created successfully.
```



#### HTTP method

- GET : 기본값, 서버 리소스를 요청할 때 : __R__ : 보내는 법: URL Query string
- POST : 리소스를 생성, 수정, 삭제 : __CUD__ : Body 안쪽에 숨겨서 보낸다

하다보니까,,.. 제출을 안해도 링크를 조작하니까 서버에 계속 보내지고 저장도 된다! > 방지하고싶은데? > CSRF Token을 만들어서 방지를 한다.