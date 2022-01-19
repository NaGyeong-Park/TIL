# 1.

- abs, all, format, bool, chr, int

# 2.

```python
def get_middle_char(a) :
    if len(a) % 2 == 0 :
        print(a[int(len(a)/2-1)],a[int(len(a)/2)])
    else :
        print(a[int(len(a)/2)])

print(get_middle_char('ssafy'))
```



# 3.

(4)



# 4.

- None
- return값이 없으므로 None 값 저장



# 5.

```python
def my_avg(*numbers):
    a = 0
    for i in numbers:
        a += i
    b = a / len(numbers)
    return b


print(my_avg(77, 83, 95, 80, 70))
```