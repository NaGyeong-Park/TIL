# Django



- 파이썬 기반 웹 프레임워크
- 프론트 백 둘다 가능하지만... 장고 당신은 최신 트렌드를 쫓아가지 못한다...
- Framework Architercture : MTV Pattern
  - MVC 디자인 패턴 : model-view-controller
  - MTV Pattern : Model(=DB), Template(=HTML), View(=조작, 가공)
  - 모델을 미리 정의 > view에서 가져와서 조작한다 



## Django 이용방법

- python -m venv venv > source venv/Scripts/activate > pip install django==3.2.10 > django-admin startproject firstpjt . >  python manage.py runserver
- app 만들기 : python manage.py startapp APPname
  - 서버 종료시 `Ctrl + C`
  - . 입력이유 : 여기에 만들어조 ~~
- 3.2.10이 LTS(Long Term Support) 버전
- 127.0.0.1 = 내 컴퓨터
- TDD 검색해보기



- 앱을 만들면 setting.py > InstallApp을 수정해야 한다.
- Internationalization
  - LANGUAGE_CODE : 경고창같은거 장고에서 자동으로 보여주는 것 언어 : ko-kr
  - TIME_ZONE : Asia/Seoul



- urlpatterns : url 적을 때 트레일링슬래쉬 꼭 적기
- views.py : render(A,B,C)
  - A : 들어온거 넣어주기
  - B : html file(templete file)을 넣어주기
  - C : 데이터를 넘겨주는 자리 : view와 templete이 자리를 넘겨받는 자리 : view에서 열심히 가공한 것을 html에 넣으려면 C자리에 데이터를 담아서 보낼때 필요한 것

### Templates

- 장고 가이드 경로 : app 디렉토리/templates/app이랑 같은 디렉토리/index.html





---

# 2022-03-03

### 외웠으면 좋겠는거

- `from django.shortcuts import render`



### Template

#### Django Template Language(DTL)

- 조건, 반복, 변수 치환, 필터 등의 기능을 제공
- 프래그래밍적 로직이 아님 / 파이썬에서 안돌아감

#### DTL Syntax (순서대로 학습하면 좋다!)

[장고 공식 문서](https://docs.djangoproject.com/en/3.2/)

1. Variable
   - `{{ variable }}`
   - render()를 사용해 views.py에서 정의한 변수 template 파일로 넘겨 사용
   - dot(.)을 사용해 변수 속성에 접근할 수 있음. `A.B`
   - render()의 세번째 인자로 {'key':value}와 같이 딕셔너리 형태로 넘겨줌
   - 이때 적은 key 문자열이 template에서 변수명으로 활용

2. Tags

   - {% tag %}

   -   `일부 태그는 시작과 종료태그가 필요 :  `{% if %}{% end %}`



3. Filters (토끼굴)
   - `{{variable|fillter}}`
   - 표시할 변수 수정시 사용

4. Comments

   - `{# #}`

   - 라인의 주석 표현

###  Template inheritance (템플릿 상속)

- 코드의 재사용성에 초점을 맞춤
- `{%extend ''%}`
  - 자식(하위)템플릿이 부모 템플릿을 확장한다는 것을 알림
  - 반드시 템플릿 최상단에 작성되어야 함
- `{%block content%} {%endblock%}`
  - 하위 템플릿에서 재지정할 수 있는 블록 정의
  - 즉, 하위 템플릿이 채울 수 있는 공간





## HTML Form

#### HTML 'form' element

- 웹에서 사용자 정보를 입려가는 여러방식 제공하고 사용자로부터 할당된 데이터 서버로 전송하는 역할
- 핵심속성
  - action : 입력 데이터가 전송될 URL 지정
  - method : 입력 데이터 전달 방식 지정

#### HTML 'input' element

- 사용자로부터 데이터 입력 받기 위해 사용
- type 속성에 따라 동작 방식이 달라짐
- 핵심속성
  - name : 중복가능, 주요 용도는 GET/POST 방식으로 전달되는 파라미터로 매핑하는 것
  - GET 방식에서는 URL에서 ?key=value&key=value 형식으로 데이터 전달

#### HTML 'label' element

- 사용자 인터페이스 항목에 대한 설명
- label을 input과 연결 : 
  - input에 id 속성 부여
  - laber에는 input id와 동일한 값의 for 속성이 필요

#### HTML 'for' attribute

- for 속성의 값과 일치하는 id를 가진 문서의 첫 번째 요소를 제어
  - 연결 된 요소가 labelabel elements인 경우 이 요소에 대한 labeled control이 됨
- 'labelable elements'
  - 연결 가능 요소 : button, input, select, textarea...

#### HTML 'id' attribute



#### HTTP

- HyperText Transfer Protocol
- 알고리즘 코테 통과하면 면접때 마니 나옴 : 네트워크 책 읽기!
- HTTP request method 종류
  - GET, POST, PUT, DELETE

## URL

#### Variable Routing

- URL 주소를 변수로 사용
- 변수 값에 따라 하나의 path()에 여러 페이지 연결가능
- 예시
  - path('accounts/user/<int:user_pk>/'...)

#### URL Path converters

- str : default
  - '/'를 제외하고 비어있지 않은 모든 문자열과 배치
- int
- slug : ASCII 문자 또는 숫자, 하이픈 및 밑줄 문자로 구성된
  - ex)'building-your-1st-django-site'

```
$ python manage.py runserver
```