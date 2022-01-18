# 1. 

```python
i = 1
N = 100
M = []
for i in range(1, N+1):
    if N % i == 0 :
        print(i)
```

# 2.

```python
numbers = [ 85, 72, 38, 80, 69, 65, 68, 96, 22, 49, 67, 51, 61, 63, 87, 66, 24, 80, 83, 71, 60, 64, 52, 90, 60, 49, 31, 23, 99, 94, 11, 25, 24]
numbers.sort()
print(numbers[(len(numbers)//2)])
```

# 3. 

```python
number = int(input("자연수를 입력해주세요. : "))
i = 1
m = 1
for i in range(1, number+1) :
    for m in range(1, number+1) :
        if m <= i :
            print('%d ' %m, end = '')
    print()
```