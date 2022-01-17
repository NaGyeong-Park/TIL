# 1

```python
numbers = int(input("자연수 입력 : "))

for i in range(1, numbers+1):
    print(i)
```

# 2

```python
numbers = int(input("자연수 입력 : "))

for i in range(numbers, 0, -1):
    print(i)
```



# 3

```python
numbers = int(input("자연수 입력(단, 100000이상 입력 불가) : "))
a = 0
if numbers < 10000 :
    for i in range(0, numbers+1):
        a = a + i
else :
    print("출력 불가능")

print(a)
```

