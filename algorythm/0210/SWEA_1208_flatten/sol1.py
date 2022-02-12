import sys

sys.stdin = open('input.txt')

T = 10


for tc in range(1, T + 1):
    # 덤프 횟수 / 높이 리스트 입력
    dump_num = int(input())
    high_lst = list(map(int, input().split()))

    # 높이 리스트 최댓값, 최댓값 인덱스 구하는 함수
    def max_def(lst):
        max_num = 0
        max_idx = 0
        for i in range(len(lst)):
            if lst[i] >= max_num:
                max_num = lst[i]
                max_idx = i
        return max_num, max_idx

    # 높이 리스트 최솟값, 최솟값 인덱스 구하는 함수
    def min_def(lst):
        min_num = 100
        min_idx = 0
        for i in range(len(lst)):
            if lst[i] <= min_num:
                min_num = lst[i]
                min_idx = i
        return min_num, min_idx

    # 덤프 횟수 만큼 진행
    for _ in range(dump_num):

        #덤프할 최댓값 인덱스, 최솟값 인덱스 찾기
        max_idx = max_def(high_lst)[1]
        min_idx = min_def(high_lst)[1]

        #덤프!
        high_lst[max_idx] -= 1
        high_lst[min_idx] += 1

        #덤프 후 최댓값과 최솟값을 구해준다
        max_num = max_def(high_lst)[0]
        min_num = min_def(high_lst)[0]
        height = max_num - min_num

        # 높이가 1이하 차이나면 for문을 나와 height값 return
        if height <= 1:
            break

    print(f'#{tc} {height}')
