# 1.

```python
def list_sum(a):
    aa = 0
    for i in a:
        aa += i
    return aa

list_sum([1,2,3,4,5])
```



# 2.

```python
def dict_list_sum(a):
    aa = 0
    for i in a:
        aa += i['age']
    return aa

print(dict_list_sum([{'name' : 'kim', 'age' : 12}, {'name' : 'lee', 'age' : 4}]))
```



# 3.

```python
def all_list_sum(a):
    aa = 0
    for i in a :
        for j in i :
            aa += j
    return aa

print(all_list_sum([[1], [2,3], [4,5,6] , [7,8,9,10]]))
```
