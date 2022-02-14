num_lst = [[1,2,3],[4,5,6],[7,8,9]]


for r in range(len(num_lst)):
    for c in range(len(num_lst[0])):
        # 5 일 때, 상하좌우에 있는 원소 출력
        if num_lst[r][c] == 5:
            # print(num_lst[r-1][c], end=' ')
            # print(num_lst[r+1][c], end=' ')
            # print(num_lst[r][c-1], end=' ')
            # print(num_lst[r-1][c+1], end=' ')
            row_d = [-1, 1, 0, 0]
            col_d = [0,0,-1,1]
            for d in range(4):
                each_row = r + row_d[d]
                each_col = c + col_d[d]
                print(num_lst[each_row][each_col])