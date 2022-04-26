# Python으로 JS 따라하기

# def add(a,b):
#     return a+b

# def mul(a,b):
#     return a*b

calculator = {
    'add' : lambda a,b : a+b,
    'mul' : lambda a,b : a*b,
}


print(calculator['add'](1,2)) # 3
print(calculator['mul'](3,4)) # 12