# 데이터 구조 2022-01-24

## 순서가 있는 데이터 구조

### 문자열구조

- s.find(d) : x 첫번째 위치 반환, 없으면 -1 반환
- s.index () :  x 첫번째 위치 반환, 없으면 오류
- s.isalpha() : 알파벳 문자 여부(단순 알파벳 아닌 유니코드 상 Letter(한국어 포함))
- s.isupper() : 대문자 여부
- s.islower() :  소문자 여부
- s.istitle : 타이틀 형식 여부(단어간에 공백 시 앞 글자가 대문자)

### 문자열 변경 메소드

- 아니 immutable인데 가능? : 변경된 문자열로 된다

- s. replace(old, new[,count]) : 바꿀 대상 글자들 새로운 글자로 바꿔서 반환

- s.strip([chars]) : 공백이나 특정 문자 제거 (lstrip : 왼쪽 / rstrip : 오른쪽)

- s.split(sep = None, maxplit = -1 ): 공백이나 특정 문자 기준 분리 : 문자열 특정한 단위로 나눠 __리스트__로 반환

- 'separator'.join([iterable]) : 구분자로 iterable을 합쳐 문자열로 반환  __join은 string 메서드__

  - iterable에 문자열이 아닌 것을 집어넣으면 Type error

  - ex) `' '.join(['3', '5'])` => `'3 5'`

- s. capitalize() : '나 공백 이후를 대문자로 
- s.upper() :모두 대문자로  / s.lower() : 모두 소문자로 / s.swapcase() : 대 <-> 소



### 리스트

- 순서를 가지는 0개 이상의 객체 참조하는 자료형
- 

### 리스트 메소드

- L.append(x)
- L.insert(i, x) : 리스트 인덱스 i에 x 삽입
- L.remove(x) : 리스트 가장 왼쪽에 있는 항목(첫 번째) x를 제거, 항목 존재하지 않으면 ValueError
- L.pop() : 리스트 가장 오른쪽에 있는 항목(마지막) 반환 후 제거
- L.pop(i) : 인덱스 i 항목 반환 후 제거
- L.extend(m) : 순회형 m의 모든 항목들의 리스트 끝에 추가(+=와 같음) _두 리스트를 합치는 너낌_
- L.index(x, start, end) : 리스트 있는 항목 중 가장 왼쪽 있는 항목 x의 인덱스 반환
- L.reverse() : 거꾸로 정렬
- L.sort(...) : 리스트 정렬 (매개변수 이용가능)
  - sorted와 구분!! : __sort는 원본 변경 / sorted는 원본변경X 정렬된 리스트 반환__

- L.count(x) : x 몇 개 존재하는지 갯수 반환
- L.clear() : 모든 항목 삭제

 