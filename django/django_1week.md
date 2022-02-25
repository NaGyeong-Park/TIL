# Django



- 파이썬 기반 웹 프레임워크
- 프론트 백 둘다 가능하지만... 장고 당신은 최신 트렌드를 쫓아가지 못한다...
- Framework Architercture : MTV Pattern
  - MVC 디자인 패턴 : model-view-controller
  - MTV Pattern : Model(=DB), Template(=HTML), View(=조작, 가공)
  - 모델을 미리 정의 > view에서 가져와서 조작한다 



## Django 이용방법

- python -m venv venv > source venv/Scripts/activate > pip install django==3.2.10 > django-admin startproject firstpjt . >  python manage.py runserver
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