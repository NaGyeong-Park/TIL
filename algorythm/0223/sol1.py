# 외우기
# 완전탐색
def powerset(idx, N):
    if idx == N:
        print(bit)
        return
    else:
        bit[idx] = 1
        powerset(idx+1,N)

        bit[idx] = 0
        powerset(idx+1,N)

a = [1,2,3]
N=len(a)
bit = [0]*N

powerset(idx=0, N=N)