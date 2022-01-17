# 1

and	exec	not
assert	finally	or
break	for	pass
class	from	print
continue	global	raise
def	if	return
del	import	try
elif	in	while
else	is	with
except	lambda	yield



# 2

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



# 3

(1)  줄바꿈 : `\n`

(2) 탭 : \t

(3) 백슬래시 : \\



# 4

```python
name = '철수'
print('안녕, %s야.' %name)
```

# 5

(5) int('3.5')

# 6

```python
n = int(input("n 값 : "))
m = int(input("m 값 : "))

print(("*"*n+ "\n")* m)
```



# 7

```python
print('"파일은 c:\\Windows\\Users\\Users\\내문서\\Python에 저장이 되었습니다." \n나는 생각했다. \'cd를 써서 git bash로 들어가 봐야지.\' ')
```



# 8

```python
a = 1
b = 2
c = 3

d = (-b + (b**2 -4*a*c)**0.5)/(2*a)
e = (-b - (b**2 -4*a*c)**0.5)/(2*a)
print(d, e)
```

