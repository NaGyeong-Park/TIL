import sys

sys.stdin = open('sample_input.txt')

T = int(input())

for tc in range(1, T + 1):

    # K : 1회 충전시 이동거리 / N : 정류장 수 / M : 충전기 대수
    K, N, M = map(int, input().split())
    # char_N : 충전기 위치
    char_N = list(map(int, input().split()))
    num = 0
    result = 0
    i = 0

    # num+K가 정류장 수보다 작을 때까지 반복
    while num + K < N :
        # 만약 i값과 K값이 같다면 이동거리 안에 충전소가 없으면 0값을 뱉고 종료한다.
       if i == K :
            result = 0
            break
       else:
           # 현재 정류장 + 이동거리 - i(0부터 K-1)가 정류장 리스트 안에 있다면
           if (num + K - i) in char_N:
               # 충전소가 있는 정류장으로 이동해준다 : num 할당
                num = num - i + K
               # 충전 1회
                result += 1
                i = -1
       i += 1

    print(f'#{tc} {result}')