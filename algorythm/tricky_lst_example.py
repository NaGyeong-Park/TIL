# N = int(input()) # 정수 한 개 입력 받기
# a, b = map(int, input().split()) #정수 형태를 열차원 리스트로 입력 받기
# lst1 = list(map(int, input().split()))
# lst2 = [map(int, input().split())] # 이건 안돼
# print(lst)
# maplst = list(map(int, list(input()))) # 띄어쓰기가 없는 정수 받아서 리스트 만들기
#
#
# lst3 = []
# for i in range(2):
#     row = list(map(int, input().split()))
#     lst3.append(row)
#
# matrix_2 = [x for x in range(10)] # [0,1,2,3,...,9]
# matrix_2 = [list(map(int, input().split())) for _ in range(2)]

# # 얕은 복사와 깊은 복사
# lst_lst = [1,2,3,4]
# temp = []
# temp.append(lst_lst)
# lst_lst.pop()
# lst_lst.insert(0,5)
#
# print(temp) # [[5,1,2,3]]
#
# # copy.deepcopy() 사용해라!
# lst_lst2 = [1,2,3,4]
# temp2 = []
# temp2.append(lst_lst2[:])
# lst_lst2.pop()
# lst_lst2.insert(0,5)
#
# print(temp2) # [[1,2,3,4]]

# 빈 martrix 만들기
# zeros = [[0]*5]*5 # 얕은 복사가 일어난다

# zeros = []
# for _ in range(5):
#     row = [0] * 5
#     zeros.append(row)
#
# zero_matrix = [[0] * 5 for _ in range(5)] #이렇게도 가능


# 리스트 사이에 리스트 넣기
lst = [1,2,3,4]
lst[2:2] = ['a','b','c']
lst [1:3] = ['a','b','c'] #[1,'a','b','c',4]