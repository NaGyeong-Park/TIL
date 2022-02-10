import sys

sys.stdin = open('sample_input.txt')

T = int(input())


for tc in range(1, T + 1):

    # 카드 갯수 입력
    num = int(input())
    # 카드 리스트 받기
    lst = list(map(int, list(input())))

    # 카드 숫자 카운트 리스트 만들어주기
    card = [0]*10
    for i in range(10):
        for j in lst:
            # 카운트 리스트 인덱스와 카드 리스트가 같다면 +1
            if i == j :
                card[i] += 1
    max_num = 0
    max_count = 0

    # max_num과 max_count찾기
    for i in range(10):
        if max_count <= card[i]:
            max_count = card[i]
            max_num = i

    print(f'#{tc} {max_num} {max_count}')

