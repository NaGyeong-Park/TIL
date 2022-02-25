T = int(input())

#파스칼 구하기
def pascal(num):
    p = [[1]] # 파스칼 삼각형 리스트
    for i in range(1, num): #줄 수 만큼 돌아감
        cnt = 0
        p.append([1]) # 첫 자리에 1 삽입
        for j in range(1,i):
            # 현재 리스트에 전 리스트의 0,1,2...값 차례대로 더한 값을 삽입
            p[i].append(p[i-1][cnt]+p[i-1][cnt+1])
            cnt += 1
        p[i].append(1) # 끝 자리에 1 삽입
    return p


for tc in range(1, T + 1):
    N = int(input()) # 파스칼 줄의 값 입력
    print(f'#{tc}')
    result = pascal(N) # pascal 함수를 이용해 pascal triangle 만들기
    for i in range(len(result)): # 출력
        for j in range(len(result[i])):
            if j == len(result[i])-1: # 리스트 끝 요소 출력시 띄어쓰기 없음
                print(f'{result[i][j]}', end='')
            else:
                print(f'{result[i][j]} ',end='')
        print()