# 1.

mutable : List, Dictionary, Set

immutable : Tuple, String, Range



# 2.

```python
n = []

for i in range (1, 51):
    n.append(i)

m = n[::2]
print(m)
```



# 3.

```python
saclass = { '채민진' : 3 , '전윤선' : 40 , '이현진' : 15 , '한지희' : 80 }

print(saclass)
```



# 4.

```python
n = int(input("가로 값 : "))
m = int(input("세로 값 : "))
i = 0
while i < m :
    print("*"*n)
    i += 1
```



# 5. 

```python
temp = 36.5
print('입실 불가') if  temp >= 37.5 else print('입실 가능')
```



# 6. 

```python
scores = [80 , 89, 99, 83]
sum = 0
i = 0
for i in scores :
    sum += i

print(sum/len(scores))
```