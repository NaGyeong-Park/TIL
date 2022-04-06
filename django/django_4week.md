# Form Class

- 유효성 검증 : 사용자가 입력한 데이터를 검증하는 것
- 유효성 검증을 모두 코드로 구현하는 것은 많은 노력이 필요하다!
- HTML form 태그는 단지 폼 역할의 한 부분에 불과
- Django Form은 이런 과중한 작업과 반복 코드를 줄여줌으로써 이 작업을 훨씬 쉽게 만들어준다

## Django's forms

Form은 Django의 유효성 검사 도구 중 하나로 __외부의 악의적 공격 및 데이터 손상에 대한 중요한 방어 수단__

Form 관련 유효성 검사를 __단순화__하고 __자동화__ 할 수 있는 기능을 제공해 직접 작성하는 코드보다 더 안전하고 빠르게 수행하는 코드 작성할 수 있게 한다.

### 처리 해주는 것

1. 렌더링을 위한 데이터 준비 및 재구성
2. 데이터에 대한 HTML forms 생성
3. 클라이언트로부터 받은 데이터 수신 및 처리



## The Django __'Form Class'__

Django Form 관리 시스템 핵심

Form내 field, filed 배치, 디스플레이, widget, label, 초기값, 유효하지 않은 field에 관련된 에러 메세지 결정

Django는 _데이터 유효성 검증, 필요시 입력된 데이터 검증 결과 재출력, 유효한 데이터에 대해 요구되는 동작 수행 등_과 같은 작업과 반복 코드를 줄여준다.

### Form 선언

Model 선언과 유사하며 같은 필드타입 사용(일부 매개변수도 유사하다)

forms 라이브러리에서 파생된 Form 클래스를 상속받는다

```python
# articles/forms.py

from django import forms

class ArticleForm(forms.Form):
    title = forms.CharField(max_length=10)
    content = forms.CharField()
```

```python
# articles/views.py

from .forms import ArticleForm

def new(request):
    form = ArticleForm()
    context = {
        'form' : form,
    }
    return render(request, 'articles/new.html', context)
```

```html
<!--new.html-->
{% extends 'base.html' %}

{% block content %}
<h1 class="text-center">NEW</h1>
<form action="{% url 'articles:create' %}" method="POST">
    {% csrf token %}
    {{ form.as_p }}
    <input type="submit">
</form>
<a href ="{% url 'articles:index' %}">[back]</a>
{% endblock %}
```



### Form rendering options

<label> & <input>쌍에 대한 3가지 출력 옵션

1. as_p() : 각 필드가 단락(<p> 태그)으로 감싸져서 렌더링
2. as_ul() : 각 필드가 목록 항목(<li> 태그)으로 감싸져서 렌더링, <ul>태그는 직접 작성해야한다
3. as_table() : 각 필드가 테이블(<tr>태그)행으로 감싸져서 렌더링, <table> 태그는 직접 작성해야 함



### Django의 HTML input 요소 표현 방법 2가지

1. Form fields : input에 대한 유효성 검사 로직을 처리하며 템플릿에서 직접 사용 됨
2. Widgets : 웹 페이지의 HTML input 요소 렌더링, GET/POST 딕셔너리에서 데이터 추출 , widgets은 반드시 Form fields에 할당 됨
   - 주의사항
   - Form Fields와 혼동해선 안된다
   - Form Fields는 input 유효성 검사를 처리한다
   - Widgets는 웹페이지에서 input element의 단순 raw한 렌더링 처리

# ModelForm

Django Form을 사용하다 보면 Model에 정의한 필드를 유저로 부터 입력 받기 위해 Form에서 Model 필드를 재정의 하는 행위가 중복 될 수 있다

그래서 Django는 Model을 통해서 Form Class를 만들 수 있는 ModelForm이라는 Helper를 제공한다!

### Model Form Class

Model을 통해 Form Class를 만들 수 있는 Helper

일반 Form Class와 완전히 같은 방식(객체 생성)으로 view에서 사용 가능!

### 기존 form을  Model form으로 바꿔보기

```python
# 기존 form을 바꿔보기
# articles/forms.py

from django import forms
from .models import Article

class ArticleForm(forms.ModelForm):
    model = Article
    fields = '__all__'
    # exclude = ('title',)
```

- form 라이브러리에서 파생된 __ModelForm 클래스__를 상속받음
- 정의한 클래스 안에 __Meta 클래스__를 선언하고, 어떤 모델을 기반으로 Form을 작성할 것인지에 대한 정보를 Meta 클래스에 지정
  - _주의사항 : 클래스 변수 fields와 exclude 동시에 사용 불가_

### Meta class (Inner Class(Nested Class))

Model의 정보를 작성하는 곳

ModelForm을 사용할 경우 사용할 모델이 있어야 하는데 Meta Class가 이를 구성한다 : 해당 Model에 정의한 field 정보를 Form에 적용하기 위함

_Meat 데이터_ : 데이터에 대한 데이터

 ex) 사진의 메타 데이터 : 촬영 시간, 장소, 렌즈 등

### view 수정

```python
# articles/views.py

def create(request):
    form = ArticleForm(request.POST)
    if request.method = 'POST':
        form = ArticleForm(request.POST)
        if form.is_valid():
            article = form.save()
            return redirect('articles:detail', article.pk)
    else:
        form = ArticleForm()
    context = {
        'form' : form,
    }
    return render(request, 'articles/create.html', context)
```

#### is_vaild() method

유효성 검사를 실행하고, 데이터가 유효한지 여부를 boolean으로 반환

데이터 유효성 검사를 보장하기 위한 많은 테스트에 대해 Django는 is_valid() 제공한다

#### The save() method

Form에 바인딩 된 데이터에서 __데이터베이스 객체를 만들고 저장__

ModelForm의 하위 클래스는 기존 모델 인스턴스를 키워드 인자 __instance__로 받아 들일 수 있다

- 제공O :  save()는 해당 인스턴스 수정(UPDATE)
- 제공X : save()는 지정된 모델의 새 인스턴스 만듬(CREATE)
- Form 유효성 확인 X : save() 호출시 form.errors 확인해 에러 확인 가능

```python
# POST 데이터로부터 form intance을 만든다
form = ArticleForm(request.POST)

# CREATE : form의 데이터로부터 new_article 객체를 저장
new_article = form.save()

# UPDATE : 존재하는 Article을 수정하여 form을 만드는데 form을 채우기위해 POST 데이터를 이용한다
article = Article.object.get(pk=1)
form = ArticleForm(request.POST, instance=article)
form.save()
```



##### forms.py 위치

어느 위치에 두어도 상관 없으나 되도록 app폴더/forms.py에 작성하는게 일반적인 구조이다



## Form & ModelForm 비교

- HTML form : 단순한 form 태그, 유효성검사X
- Form
  - 어떤 Model에 저장해야 되는지 알수 없다 : 유효성 검사 이후 cleaned_data 딕셔너리 생성
  - cleaned_data 딕셔너리에서 데이터 받은 후 .save() 호출
  - ___Model에 연과되지 않은 데이터 받을 때 사용___
- ModelForm
  - ___Django가 해당 model에서 양식에 필요한 대부분 정보를 이미 정의___
  - 어떤 레코드를 만들어야 할 지 알고 있으므로 바로 .save() 호출 가능

__주의사항 : ModelForm과 Form Class는 다르다! 회원가입에선 ModelForm을 쓰는 것(DB에 저장) 로그인은 Form Class(인증만 하고 DB에 저장 안함! 데이터 만 활용)__

# Rendering fields manually