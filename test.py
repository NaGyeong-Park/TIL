number = int(input("자연수를 입력해주세요. : "))
i = 1
m = 1
for i in range(1, number+1) :
    for m in range(1, number+1) :
        if m <= i :
            print('%d ' %m, end = '')
    print()