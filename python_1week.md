# Python 

## Confidential

프로그래밍 : 일종의 명령어 모음

컴퓨터 프로그래밍 : 컴퓨터에게 명령시키기 위한 약속

선언적 지식 : 사실에 대한 내용 / 명령적 지식 : How-to

### python의 특징

- 인터프리터 언어
- 객체 지향 프로그래밍

### python 개발환경

- 대화형 환경
  - 파이썬 기본 Interpreter
  - Jupyter Notebook, IDE(통합개발환경, Pycharm)
- 스크립트 실행
  - .py 파일을 작성하고, IDE 혹은 Text Editor(VSC) 활용

## 기초문법

### 코드 스타일 가이드

- PEP8 스타일 사용
- 들여쓰기 4칸

### 변수

- assignment : = : 할당한다
- 메모리 어딘가 저장되어 있는 객체를 참조하기 위해 사용되는 이름
  - 객체(object) : 숫자, 문자, 클래스 등 값을 가지고 있는 모든 것 : 파이썬은 객체지향 언어, 모든 것이 객체로 구현되어 있음
- 동일 변수에 다른 객체 언제든 할당 가능해서, 참조하는 객체가 바뀔 수 있어 __변수__
- 변수는 할당 연산자 __=__ 를 통해 값을 할당
  - `type()`: 변수에 할당된 값의 타입
  - `id()` : 변수에 할당된 객체의 고유한 아이덴티티 값, 주소
- 실습문제 : 각각 값 바꿔서 저장하는 코드 : ___임시 변수 활용___

### 식별자(Identifiers)

- 변수의 이름을 어떻게 지을 수 있을까?
- 규칙
  - 식별자 이름 영문 알파벳, _, 숫자로 구성
  - 첫 글자에 숫자 x, 길이제한 X, 대소문자 구별
  - False, None, True, and , as ... 는 예약어로 사용 X
  - 우리는 보통 Snake Case 사용 : red_apple / Camel Case : RedApple
  - 내장함수나 모듈 등의 이름으로도 만들면 안됨

### 사용자 입력

- input([prompt]) : 입력 받는 함수

### 주석

- 코드에 대한 설명
- 한 줄 주석 : #  /  여러 줄 주석 : 한 줄씩 # or """ or ''' : 뒤에 두개는 doscstring 위해 사용 or VS code 에서 (ctrl + / )





## 파이썬 자료형

![image-20220117093741196](python_1week.assets/image-20220117093741196.png)

### None Type

### Boolean Type

- 비어있으면(0이 아닌 모든 것은 T) F, -1도 T

### 수치형(Numeric Type)

#### 정수(int)

- 모든 정수의 타입은 int
- 매우 큰 수를 나타낼 때 오버플로우 발생 X
- 진수
  - 2진수 : 0b
  - 8진수 : 0o
  - 16진수 : 0x

#### 실수(float)

- 정수가 아닌 모든 실수는 float
- 부동소수점 : -2진수(비트)로 숫자 표현 : 이 과정에서 floating point rounding error 발생해 예상치 못한 결과 발생 
- Rounding error : 매우 작은 수보다 작은지 확인하거나 math모듈 활용(epsilon, isclose)

#### 복소수(complex)

