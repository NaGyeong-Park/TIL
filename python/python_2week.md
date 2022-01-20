# 함수

## 함수 기초

### 함수의 정의

### 함수 기본 구조

- 함수, 모듈 클라스의 ''', """는  Docstring(Documentation String,설명해주는 역할)
  - `help(함수이름)` 하면 docstring이 뿅 하고 나옴.
- return에서 여러 값을 보내고 싶으면 return a, b, c로 하면 자동으로 패킹되어 나감

### 함수의 결과값(Output)

- void function : 명시적인 return 값 없으면 None 반환하고 종료
- Value returning function : 함수 실행 후, return문 통해 값 반환

### 함수의 입력(Input)

- parameter : 매개변수, 인수 : 정의 할 때
- Argument : 전달인자, 인자 : 호출 할 때





# 모듈

## 모듈과 패키지

- 코드 < 함수 < 모듈 < 패키지 < 라이브러리

### 모듈과 패키지 불러오기

- import module, from module import *, from module import var, function, Class
- from package import module

### 파이썬 패키지 관리자(pip)

- PyPI(Python Package Index)에 저장된 외부 패키지들을 설치하도록 도와주는 패키지 관리 시스템(시험X)



__for문 안에서 안쓰면 _처리(i)

```python
def test(a : list) -> int
```

list형을 int로 return 해준다고 말해줌

JSON : Data를 표현하는 방법 중 하나, key와 value로 이루어짐

```python 
import json
with file_stream = open('data/data.json', 'r', encording = 'UTF-8' as file_stream:
```

- r : 읽기 / a : 수정

