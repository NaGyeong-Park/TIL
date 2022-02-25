a = '()()((()))'
b = '((()((((()()((()())((())))))'

def cheak(a):
    lst = []
    for i in range(len(a)):
        if a[i] == '(':
            lst.append('(')
        elif a[i] == ')':
            if not lst:
                False
            else:
                lst.pop()

    if not lst:
        return True
    else:
        return False

print(cheak(a))
print(cheak(b))