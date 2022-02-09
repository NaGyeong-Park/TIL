import sys

sys.stdin = open('input2.txt')

T = int(input())


for tc in range(1, T + 1):
    def max_def(lst):
        if not lst:
            return 0
        else :
            max_num = lst[0]
            for i in lst:
                if i > max_num:
                    max_num = i
            return max_num


    num = int(input())
    col_lst = list(map(int, input().split()))
    lst = [[0]*100 for i in range(num)]

    for i in range(num):
        for j in range(col_lst[i]):
            lst[i][j] = 1


    gra_result = []

    for j in range(100):
        gra_num = 0
        gra_lst = []
        for i in range(num-1, -1,-1):
            if (lst[i][j]==0 and lst[i-1][j] == 1):
                gra_num += 1
            if (lst[i][j] == 0 and lst[i - 1][j] == 0):
                gra_num += 1
            if (lst[i][j] == 1 and lst[i - 1][j] == 0):
                gra_lst.append(gra_num)
        gra_result.append(max_def(gra_lst))
        gra_lst = []

    print(f'#{tc} {max_def(gra_result)}')