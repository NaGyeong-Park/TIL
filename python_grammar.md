# Python Grammar for ME :)

Upload when I learn new things



## 2022.01.15

## 1. input.split()

- 파이썬에서는 여러줄로 이루어진 문자열을 입력받기 위해선 각 줄마다 input이 필요하다.
- 한 줄에 여러 데이터를 입력받고 싶으면 split 함수를 이용한다.
- split(unknown) 구분시 unknown을 기준으로 구분한다. 없다면 공백 기준
- ex) `a, b = input().split()`



## 2. 나누기 값을 정수로 받으려면?

- //



## 3. 숫자를 리스트처럼? 

- b = 123에서 b[0] = 1 / b[1] = 1 / b[-1] = 3
- 없는 인덱스 값 입력시 _IndexError: string index out of range_ 오류