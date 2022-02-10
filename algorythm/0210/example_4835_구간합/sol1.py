import sys

sys.stdin = open('sample_input.txt')

T = int(input())


for tc in range(1, T + 1):

    # 숫자 갯수 N / 구간 M 입력
    N,M = map(int, input().split())

    # 숫자 리스트 입력
    num_lst = list(map(int,input().split()))

    # 큰 수 0 / 작은 수는 한 숫자의 최대인 10000에 구간 M만큼 곱해준다
    max_num = 0
    min_num = 10000*M
    num = 0

    # 구간 인덱스 리스트를 만들어준다
    M_lst = []
    for i in range(M):
        M_lst.append(i)
        
    # 인덱스 0부터 구간 마지막까지 반복
    for i in range(N-M+1):
        # 구간 합 계산
        for j in M_lst:
            num += num_lst[i+j]
            
        # 최대값/최솟값보다 구간합이 크면/작으면 num값을 max_num/min_num에 할당
        if max_num <= num:
            max_num = num
        if min_num >= num:
            min_num = num
        #num 초기화 후 for문 반복
        num = 0
        
    # 구한 최댓값에서 최솟값을 빼주고 출력
    result = max_num - min_num
    print(f'#{tc} {result}')
