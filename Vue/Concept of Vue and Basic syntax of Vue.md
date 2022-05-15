# Vue, Who are you

과거 웹 사이트들은 요청에 따라 매번 새로운 페이지를 응답하는 방식(MPA, Multi Page Application)이었으나, 모바일 네이티브 앱과 같은 형태의 웹 페이지가 필요해졌다. 그래서 SPA 대두되었음!

## SPA : Single Page Application

현재 페이지를 동적으로 렌더링함으로써 사용자와 소통하는 Web App

단일 페이지로 구성되며 서버로부터 __최초__에만 페이지를 다운로드하고, 이후에는 동적으로 DOM을 구성

- 처음 페이지를 받은 이후로부터는 서버로부터 새로운 전체 페이지를 불러오는 것이 아닌, 현재 페이지 중 필요한 부분만 동적으로 다시 작성

연속되는 페이지 간 UX 향상

동작 원리의 일부가 CSR(Client Side Rendering) 구조를 따른다

## CSR : Client Side Rendering

![image-20220516002833014](Vue%2001%20-%20Basic%20Grammer.assets/image-20220516002833014.png)

서버에서 화면을 구성하는 SSR 방식과 달리 클라이언트에서 화면을 구성

최초 요청 시 HTML, CSS, JS 등 데이터를 제외한 각종 리소스를 응답받고 이후 클라이언트에서는 필요한 데이터만 요청해 JS로 DOM을 렌더링하는 방식 : 뼈대만 받고 브라우저에서 동적으로 DOM을 그림

장점 : 서버와 클라이언트 간 트래픽 감소 / UX 향상

단점 : SSR에 비해 전체 페이지 최종 렌더링 시점이 느리다 / SEO(검색 엔진 최적화)에 어려움이 있다. : _최초 문서에 데이터 마크업이 없어!!_



## SSR : Server Side Rendering

![image-20220516003001319](Vue%2001%20-%20Basic%20Grammer.assets/image-20220516003001319.png)

서버에서 클라이언트에게 보여줄 페이지 모두 구성해서 전달

장점 : 초기 구동 속도 빠름 / SEO에 최적화

단점 : 모든 요청마다 새로운 페이지를 구성해서 전달한다 : 트래픽 상, UX 떨어짐

## => SSR + CSR 같이쓴다.



## SSR & CSR : 최종 HTML 생성 주체가 누구니?

실제 브라우저에 그려질(렌더링) HTML을 서버가 만드면 SSR, 클라이언트가 만들면 CSR



##### [참고] SEO : Search Engine Optimization (검색 엔진 최적화)

웹 페이지 검색엔진이 자료를 수집하고 순위를 매기는 방식에 맞게 웹 페이지를 구성해서 검색 결과 상위에 노출될 수 있게하는 작업

인터넷 마케팅 방법 중 하나

구글 등장 이후 검색엔진들이 컨텐츠의 신뢰도를 파악하는 기초 지표로 사용 : 다른 웹 사이트에서 얼마나 인용되었나? 반영 => 타 사이트에 인용되는 횟수를 늘리는 방향으로 최적화

##### [참고] SEO 대응

Vue.js or React 등의 SPA 프레임워크는 SSR을 지원하는 SEO 대응 기술이 이미 존재한다

또는 추가 별도의 프레임 워크 사용도 한다 : Nuxt.js(Vue.js) / Next.js(React)



# Concepts of Vue.js

## MVVM Pattern : Model View ModelView

App 로직을 UI로부터 분리하기 위해 설계된 디자인 패턴

![image-20220516003702911](Vue%2001%20-%20Basic%20Grammer.assets/image-20220516003702911.png)

### Model

_Vue에서 Model은 JS의 Object다_ : Object === { key : value }

Model은 Vue Instance 내부에서 data라는 이름으로 존재하고, data가 바뀌면 View(DOM)가 반응한다.

### View

_Vue에서 View는 DOM(HTML)이다_ : Data의 변화에 따라 바뀌는 대상

### ViewModel

_Vue에서 ViewModel은 모든 Vue Instance다_ : View-Model 사이에서 Data와 DOM 관련 모든 일 처리

ViewModel을 활용해 Data를 얼마만큼 잘 처리해서 보여줄 것인지 고민하는 것



##### [참고] Django & Vue.js 코드 작성 순서

Django : "데이터의 흐름" : url => views => template

Vue.js : "Data 변하면 DOM이 변경" : Data 로직 작성 => DOM 작성



# Basic syntax of Vue.js

## Vue instance

모든 Vue 앱은 Vue 함수로 새 인스턴스를 만드는 것부터 시작!

Vue Instance === Vue Component



## Options/DOM 

### 'el'

Vue 인스턴스에 연결(마운트) 할 기존 DOM 요소가 필요하다.

CSS 선택자 문자열 or HTML Element로 작성



### 'data'

Vue Instance의 data Object

Vue Instance의 state Data 정의하는 곳

Vue template에서 interpolation를 통해 접근 가능

v-bind, v-on과 같은 directive에서도 사용 가능

Vue 객체 내 다른 함수에서 this 키워드를 통해서 접근 가능



### 'methods'

Vue Instance에 추가할 method

Vue template에서 interpolation를 통해 접근 가능

v-on과 같은 directive에서도 사용 가능

Vue 객체 내 다른 함수에서 this 키워드를 통해서 접근 가능

__주의 : 화살표 함수 메서드 정의할 때 사용 X : 화살표 함수가 부모 context를 binding해서 `this`는 Vue Instance가 아니기 때문이다!__



## 'this' keyword in vue.js

Vue 함수 객체내에서 vue Instance를 가리킴

화살표 함수 사용 X : data, method 정의

```js
const app = new Vue({
    el: '#app',
    data: {
        msg : 'jello'
    },
    methods : {
        greeting() { 
        console.log('jello')}
    }
})
```



# Template Syntax

## Interpolation(보간법)

보간법 : 알려져있는 데이터지점에서 새로운 데이터 지점을 찾아내는 것 : 데이터를 연결하는 방법

1. Text : `<span>{{ data }}</span>`
2. Raw HTML : `<span v-html="rawHtml"></span>`
3. Attributes : `<div v-bind:id="dynamicId"></div>`
4. JS 표현식 : {{ number + 1 }}, {{ message.split('').reverse().join('') }}

## Directive

v- 접두사가 있는 특수 속성

v-for을 제외한 속성 값은 단일 JS 표현식이 됨

__표현식 값이 변경될 때 반응적으로 DOM에 적용하는 역할__

전달인자(Arguments) `:`을 통해 전달인자 받을 수 있다

수식어(Modifiers) `.`으로 표시되는 특수 접미사, directive를 특별한 방법으로 바인딩 해야 함을 나타냄



### v-text

### v-html 

XSS 공격에 취약할 수 있다. 임의로 사용자로부터 입력 받은 내용 v-html에 __절대__ 사용금지

### v-show

조건부 렌더링 중 하나, 요소는 항상 렌더링 되고, DOM에 남아있다. 단순히 element에 display CSS 속성 토글

### v-if v-else v-else-if

조건부 렌더링 중 하나, 조건에 따라서 요소를 렌더링한다.

##### [참고] v-show VS v-if

- v-show : 딱 한 번만 렌더링 되는 경우면 v-if에 비해서 상대적으로 렌더링 비용이 높다 / 자주 변경되는 요소라면 한번 렌더링 된 이후로부터는 보여주는지 여부만 판단하면 되서 토글 비용이 적다
- v-if : 렌더링 자체가 안되서 렌더링 비용이 낮다 / 자주 변경되는 요소면 다시 렌더링 해야되니까 비용 증가할 수 있음

### v-for

item in items 구문 사용

v-for 사용시 __반드시 key 속성을 각 요소에 작성__

v-if와 함꼐 사용시 v-for가 우선순위가 높으나, 가능하면 같이 쓰지 말 것

### v-on  : @

element에 Event listener 연결

### v-bind : :

HTML 요소 속성에 Vue의 상태 데이터를 값으로 할당

### v-model

HTML form 요소의 값과 data를 양방향 바인딩

- .lazy : input 대신 change 이벤트 이후에 동기화
- .number : 문자열을 숫자로 변경
- .trim : 입력에 대한 trim 진행

## Options/Data

### `computed`

데이터를 기반으로 하는 계산된 속성 

함수의 형태로 정의하지만 함수가 아닌 함수의 반환 값이 바인딩 된다.

종속된 데이터에 따라 저장(캐싱) 된다. __종속된 데이터가 변경될 때만 함수를 실행한다__

즉, 어떤 데이터에도 의존하지 않는 computed 속성의 경우 절대 업데이트 X

__반드시 반환값이 있어야한다__

#### computed & methods 

최종 결과에 대해 두가지 접근 방식은 서로 동일하나

차이점은 computed 속성은 종속 대상을 따라 저장(캐싱) 된다.

=> computed는 종속된 대상이 변경되지 않는 한 computed에 작성된 함수를 여러 번 호출해도 계산 다시 X 계산되어 있던 결과 반환

=> methods를 호출하면 렌더링 다시 할 때마다 항상 함수를 실행한다.

### `watch`

데이터 감시, 데이터에 변화가 일어났을 때 실행되는 함수

#### computed & watch

- computed : 특정 데이터를 직접 가공/사용해 다른 값으로 만들 때 사용 : 속성은 계산해야하는 목표 데이터를 정의하는 방식으로 소프트웨어 공학에서 이야기하는 '선언형 프로그래밍' 방식
  - _특정 값 변동시 해당 값을 다시 계산해서 보여준다_
- watch : 특정 데이터 변화 상황에 맞춰 다른 data 등이 바뀌어야 할 때 주로 사용 : 감시할 데이터를 지정하고, 그 데이터가 바뀌면 특정 함수를 실행하는 방식 : 소프트웨어 공학에서 이야기하는 '명령형 프로그래밍' 방식
  - _특정 값 변동시 다른 작업을 한다_
- 선언형 프로그래밍 : 계산해야 하는 목표 데이터를 정의
- 명령형 프로그래밍 : 데이터가 바뀌면 특정 함수를 실행해!

### `filter`

텍스트 형식화를 적용할 수 있는 필터, 이어서 사용 가능

자바스크립트 표현식 마지막에 | 와 함께 추가되어야 한다.