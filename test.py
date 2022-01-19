
def my_avg(*numbers):
    a = 0
    for i in numbers:
        a += i
    b = a / len(numbers)
    return b


print(my_avg(77, 83, 95, 80, 70))