import sys

sys.stdin = open('11.txt')
col_lst = list(map(int, input().split()))
print(col_lst)
print(col_lst[566])
print(col_lst[710])