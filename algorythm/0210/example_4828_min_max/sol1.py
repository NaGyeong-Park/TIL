import sys

sys.stdin = open('sample_input.txt')

T = int(input())

for tc in range(1, T + 1):

    # 입력
    n = int(input())
    lst = list(map(int, input().split()))

    # 최댓값 / 최솟값 설정
    max_num = 0
    min_num = 1000000

    # 입력받은 lst만큼 반복
    for elem in lst:
        # 최댓값/최솟값보다 elem값이 크면/작으면 max_num/min_num값에 elem 할당
        if max_num < elem:
            max_num = elem
        if min_num > elem:
            min_num = elem

    # 최댓값에서 최솟값을 빼 출력
    print(f'#{tc} {max_num-min_num}')