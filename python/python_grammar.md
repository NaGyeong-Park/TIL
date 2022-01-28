# Python Grammar for ME :)

Upload when I learn new things



## 2022.01.15

## 1. input.split()

- 파이썬에서는 여러줄로 이루어진 문자열을 입력받기 위해선 각 줄마다 input이 필요하다.
- 한 줄에 여러 데이터를 입력받고 싶으면 split 함수를 이용한다.
- split(unknown) 구분시 unknown을 기준으로 구분한다. 없다면 공백 기준
- ex) `a, b = input().split()` 
  - 입력 : 1 2
  - 처리과정 : 리스트 형태의 [1,2] => 나눠서 a에 1, b에 2 할당




## 2. 나누기 값을 정수로 받으려면?

- //



## 3. 숫자를 리스트처럼? 

- b = 123에서 b[0] = 1 / b[1] = 1 / b[-1] = 3
- 없는 인덱스 값 입력시 _IndexError: string index out of range_ 오류



## 2022. 01.16

### 1. 튜플과 리스트의 차이

- 리스트는 [], 튜플은 ()
- 리스트는 값 생성, 삭제, 수정 가능 / 튜플은 __값 못바꿈__
- ()를 생략할 수도 있다
- 구분하는 `,`를 반드시 붙여줘야 한다.

## 2.  리스트 함수

- 수정 : `a[x] = y` (x는 인덱스 번호, y는 바꿀 값)
- 삭제 : del함수 ex) `del 객체`
- 삭제 슬라이싱 기법 : `del a[2:]` : 2~ 삭제
- 요소 추가 : `append` / ex) `a.append(y), a.append(a,b), a.append([1,2,3])`_리스트 추가_
- 정렬 : `sort` : ex) `a.sort()`: 숫자, 알파벳 순서대로 정렬
- 뒤집기 : `reverse` : ex) `a.reverse()` : 거꾸로 뒤집기
- 위치 반환 : `index(x)` : ex) a.index(x) = x의 위치값
- 요소 삽입  : `insert(a,b)` : a번째 위치에 b를 삽입
- 요소 제거 : `remove(x)` : ex) a.remove(x) : 리스트에서 첫 번째로 나오는 x값 삭제
- 요소 끄집어내기 : `pop()`: ex) a.pop() : 맨 마지막 요소 꺼내주고 리스트에서 요소 삭제 / `pop(x)`는 x번째 요소 돌려주고 그 요소 삭제
- 리스트에 포함된 요소 x의 개수 세기 :`count(x)`: 리스트 안에 x 개수를 조사해서 돌려줌
- 확장 : `extend(x)`: a 리스트에 x 리스트 더함, x에는 리스트만 올 수 있음! : ex) a.extend([3,4]) => a = [1,2,3,4] : `a.extend([x,y]) 와 같은 a += [x,y]`



## 2022.01.17

### 1. 반복문 없이 사각형 만들기

- easy..
- 파이썬은 +로 문자열을 더 할 수 있는 점 까먹지말자!

```python
n = 5
m = 5

print(("*"*n + "\n")*m)
```

### 2.  python tutor

 [python Tutor](https://pythontutor.com/visualize.html#mode=display) : 실행되는 코드 하나하나 보여주는 사이트, 코드 실행이 어떻게 되는지 생각해볼때 유용



### 3. 파이썬은 실수에서 오차가 나올 수 있다!

그래서 비교를 해줘야 하는데... 3가지 방법이 있다!



매우 작은 수보다 작은지 확인

``` python
abs(a - b) <= 1e-10
```

epslion 사용

```python
import sys
print(abs(a-b) <= sys.float_info.epsilon)
```

math 함수 이용(python 3.5 이상부터 가능)

```python
import math
math.isclose(a, b)
```



## 2022.01.19

```python
import random

random.randint(0, 1)
```

random으로 0 아니면 1을 보여줌



## 2022.01.21

1.  __get은 (key) or (key, key값이 없으면 대신 가져오는 디폴트값) 함수__

- 여러개의 key를 입력받을 수 없다

2. json 파일 읽어오기

```python
 path = f'data/movies/{id}.json'
        with open(path, 'rt', encoding='UTF8') as open_mov :
            json_data = json.load(open_mov)
```

- path  값을 여러개로 바꾸고 싶다면 문자열로 저렇게 하면 된다..!(응용한 나 칭찬해)

3. __재귀함수__

- recursive : 함수에서 안에서 함수를 호출해줬기 때문에 안의 함수값을 return 해줘야 한다.

## 2022.01.23

1. json 파일 읽기

- `open(path, encoding = 'UTF8') `: 열기
- `with open(path, encoding = 'UTF8')` : 열기와 동시에 닫기

2. 문자열 안에서 변수이름 넣기 새로운 방식

- `'f.'abcde{변수이름}'` : 출력 `abcde(변수값)`

3. `TypeError: 함수() missing 1 required positional argument: '함수 2번째 변수'`

- 에러에도 친절히 써놨지만.. 2개를 입력해야하는데 1개의 요소만 입력해 나타난 에러

4. 재귀함수 예제들

- 팩토리얼
- 제곱근 계산기

```python
def jagop(num, ja) :
    if ja == 0:
        return 1
    elif ja > 1:
        return num*jagop(num,ja-1)
    else :
        return num


print(jagop(2,8))
```

- 피보나치
  - 0 / 1 / 1 / 1 + 1/ 2 +1 / 3 + 2 / 5 + 3 
  - 중복이 많아 재귀로 푸는건 비효율적

```python
def pivo(num) :
    if num > 1:
        return pivo(num-1) + pivo(num-2)
    else :
        return num

print(pivo(숫자))
```

- while문으로 푼 문제

```python
def pivo(num) :
    while num > 1 :
        return pivo(num-1) + pivo(num-2)
    return num

print(pivo(숫자))
```



## 2022.01.25

1. `copy.deepcopy`

- [깊은복사, 얕은복사](https://blockdmask.tistory.com/576) : 슬라이싱이 깊은 복사로보이지만, 사실 내부적으로는 얕은 복사였다...!
- 얕은복사 : '=', [:], copy모듈의 copy 또한 얕은 복사
- 깊은복사 : copy.deepcopy

2. 같은 내용의 여러 변수 만들기

- ```python
  for i in range(n):
      globals()[f'var_{i}'] = 0
  ```

- locals()함수는 현재 local변수들을 딕셔너리 형태로 return

- globals()함수는 현재 globals변수들을 딕셔너리 형태로 return

3. 타입 에러 : 메소드 에러

-TypeError: can only concatenate str (not "builtin_function_or_method") to str

- word.upper은 method => word.upper() 사용시 string으로 불러올 수 있다.



## 2022.01.28

1. list(), []의 차이

- list()와 []는 차이가 없지만
- `list(map(int, input().split()))` 와 `[map(int, input().split())]`는 차이난다.
- map은 map object로 반환해주기때문 !

2. 파이썬다운 비어있는 리스트 확인법

- NO 권장 : 파이썬답지 않다!
  - `if len(lst) == 0 :`
- 권장 : 
  - `if not lst :`

