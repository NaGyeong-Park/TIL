# DP로 푼거 아닌거같은데...
import sys

sys.stdin = open('sample_input.txt')

T = int(input())

def find_charge_cnt(K,N,lst):
    i = stop = cnt = 0

    while stop+K < N:
        if i >= K:
            return 0

        elif lst[stop+K-i] == 1:
            stop = stop+K-i
            i = 0
            cnt += 1

        else:
            i +=1
    return cnt

for tc in range(1, T + 1):

    # K : 1회 충전시 이동거리 / N : 정류장 수 / M : 충전기 대수
    K, N, M = map(int, input().split())
    bus_stop = [0]*(N+1)
    # char_N : 충전기 위치
    char_N = list(map(int, input().split()))
    for i in char_N:
        bus_stop[i] += 1
    print(f'#{tc} {find_charge_cnt(K,N,bus_stop)}')