
def plma(num):
    if num >= 0 :
        return num
    else :
        return -num

# num = 0
# for i in range(5):
#     lst.append([])
#     for j in range(5):
#         num += 1
#         lst[i].append(num)
lst = []
for i in range(5):
    row = [j + i*5 for j in range(1,6)]
    lst.append(row)
print(lst)

# for i in range(5):
#     for j in range(5):
#         ro_lst = [i-1, i+1]
#         col_lst = [j-1, j+1]
#         try :
#             for k in range(2):
#                 result += plma(lst[i][col_lst[k]]-lst[i][j])
#                 result += plma(lst[ro_lst[k]][j]-lst[i][j])
#         except IndexError:
#             continue ! -1,-2가 포함됨

rlt = 0
for r in range(len(lst)):
    for c in range(len(lst[r])):
        d_row = [-1,1,0,0]
        d_col = [0,0,-1,1]
        for d in range(4):
            each_row = r + d_row[d]
            each_col = c + d_col[d]

            if each_col < 0 or each_col < 0 or each_col > 4 or each_row > 4:
                continue
            else:
                sub = lst[r][c] - lst[each_row][each_col]
                sub = sub if sub >= 0 else -sub
                rlt += sub

print(rlt)