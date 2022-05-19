# SFC

## component

기본 HTML element를 확장해 재사용 가능한 코드를 캡슐화하는데 도움을 준다.

유지보수를 쉽게 만들어주고 재사용 측면에서도 매우 강력한 기능을 제공한다

__ Vue component === Vue Instance === .vue 파일__ 

### SFC : Single File Component

![image-20220516012435630](Vue%20CLI%20&%20Props%20&%20Emit%20&%20router.assets/image-20220516012435630.png)

Vue의 Component 기반 개발의 핵심 특징

하나의 Component는 .vue 확장자를 가진 하나의 파일 안에서 작성되는 코드의 결과

화면의 특정 영역에 대한 HTML, CSS, JavaScript 코드를 하나의 파일(.vue)에서 관리 

### => .vue 확장자를 가진 싱글 파일 컴포넌트를 통해 갭라하는 방식



Vue 컴포넌트는 `const app = new Vue({...})`의 app을 의미하며 이는 Vue 인스턴스

_주의_ : 컴포넌트 기반의 개발이 반드시 파일 단위로 구분되어야 하는 것이 아니다! 단일 html 파일 안에서도 여러 개 컴포넌트 만들어 개발 가능하다.



# Vue CLI : 표준 도구

확장 플러그인, GUI, Babel 등 다양한 tool 제공

## Node.js

JS를 browser이 아닌 환경에서도 구동할 수 있도록 하는 JS runtime 환경 => __브라우저 밖을 벗어날 수 없던 JS 언어의 태생적 한계를 해결__

Chrome V8 엔진을 제공하여 여러 OS환경에서 실행할 수 있는 환경 제공

=> 단순히 브라우저 조작만 하던 JS를 SSR 아키텍처에서도 사용할 수 있게 한다.

## NPM (Node Package Manage)

JS 언어를 위한 패키지 관리자 : python pip과 마찬가지로 다양한 의존성 패키지 관리

Node.js의 기본 패키지 관리자



# Babel & Webpack

## Babel : JS compiler

![image-20220516013324560](Vue%20CLI%20&%20Props%20&%20Emit%20&%20router.assets/image-20220516013324560.png)

JS의 ECMAScript 2015+ 코드를 이전 버전으로 번역/변환해주는 도구

과거 JS의 파편화와 표준화의 영향으로 코드 스펙트럼 매우 다양 => 원시코드를 목적코드로 옮기는 번역기가 등장하며 개발자는 더이상 내 코드가 특정 브라우저에서 동작하지 않는 상황에 대해 크게 고민하지 않을 수 있게 된다.

## Webpack

![image-20220516013856892](Vue%20CLI%20&%20Props%20&%20Emit%20&%20router.assets/image-20220516013856892.png)

static module bundler : 모듈 간 의존성 문제 해결하기 위한 도구

프로젝트에 필요한 모든 모듈을 매핑하고 내부적으로 종속성 그래프를 빌드함.

_js 파일 하나 === 모듈 하나_

(배경) : 브라우저만 조작하던 시기 JS는 모듈 관련 문법없이 사용되었는데 JS와 App이 커지면서 전역 scope를 공유하는 형태 기존 개발 방식의 한계점이 드러났다. 그래서 라이브러리를 만들어 필요한 모듈을 불러오거나 코드를 모듈 단위로 작성하는 등의 다양한 시도가 이루어졌다.

### Module 의존성 문제

모듈 수 많아지고 라이브러리 or 모듈 간의 의존성 깊어지며 특정한 곳에서 발생한 문제가 어떤 모듈 간의 문제인지 파악이 어려워졌다. _즉 Webpack은 이 모듈 간의 의존성 문제를 해결하기 위해서 등장_

=> 모듈 의존성 해결해주는 작업 : __Bundling__ : 도구가 __Bundler__ : Webpack은 다양한 Bundler 중 하나이다.

여러 모듈을 하나로 묶어주고 묶인 파일은 하나로 합쳐진다. Bundling된 결과물은 순서에 영향 안받고 동작

_Vue CLI는 Babel, Webpack에 대한 초기 설정이 자동으로 되어있다._



## Vue 프로젝트 구조

![image-20220516014000400](Vue%20CLI%20&%20Props%20&%20Emit%20&%20router.assets/image-20220516014000400.png)

src/ assets : webpack에 의해 빌드 된 정적 파일

src/ components : 하위 컴포넌트들

src/ App.vue : 최상위 컴포넌트

_src/ main.js_ 

- webpack 빌드 시작시 가장 먼저 불러오는 entry point
- 실제 단일 파일에서 DOM-data를 연결했던 것과 동일한 작업 이루어지는 곳
- Vue 전역에서 활용할 모듈 등록 가능 파일

bable.config.js : babel 관련 설정 작성 파일

package.json : 프로젝트 종속성 목록과 지원되는 브라우저에 대한 구성 옵션 포함

package-lock.json : node_modules 설치되는 모듈과 관련된 모든 의존성 설정 및 관리 / 팀원 및 배포 환경에서 정확히 동일한 종속성 설치하도록 보장하는 표현 / 사용할 패키지 버전 고정 / 개발과정간 의존성 패키지 충돌 방지



# Pass Props & Emit Events

![image-20220516014545412](Vue%20CLI%20&%20Props%20&%20Emit%20&%20router.assets/image-20220516014545412.png)

_"props는 아래로, events는 위로!"_

부모는 자식에게 데이터 전달(Pass props) 자식은 자신에게 일어난 일 부모에게 알림(Emit event)

부모는 '데이터' 전달 / 자식은 '메세지' 보냄

## 컴포넌트 등록 3단계

1. 불러오기(import)
2. 등록하기(register)
3. 보여주기 (print)