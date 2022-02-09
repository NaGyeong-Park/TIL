import sys

sys.stdin = open('input3.txt')

T = 10

for tc in range(1, T + 1):

    #1차원 배열 갯수
    num = int(input())
    col_lst = list(map(int, input().split()))
    #2차원 배열 만들어주기
    lst = [[0]*255 for i in range(num)]

    #각자 건물 높이만큼 요소들 1로 바꿔주기
    for i in range(num):
        for j in range(col_lst[i]):
            lst[i][j] = 1

    # 1차로 전망권이 확보된 빌딩 구하기
    def cheak(lst,col_lst):
        cheak_lst = []

        # 전체 건물만큼 반복
        for k in range(len(lst)):
            # 건물 높이가 0이면 넘어감
            if col_lst[k] == 0:
                continue;
            # k 번째 건물 꼭대기 기준 전망권이 확보되었다면 다음에 확인할 빌딩리스트에 추가
            elif lst[k-2][col_lst[k]-1] == lst[k-1][col_lst[k]-1] == lst[k+1][col_lst[k]-1] == lst[k+2][col_lst[k]-1] == 0 :
                cheak_lst.append([k,col_lst[k]])
        return cheak_lst

    # lst = 배열 리스트 / col_lst = 확인할 빌딩들 리스트 : 형식 [빌딩 인덱스, 빌딩 높이]
    def cheak_again(lst, col_lst):
        result = 0
        #빌딩 모두 확인
        for j in range(len(col_lst)):
            # 빌딩 인덱스 k로 설정
            k = col_lst[j][0]

            # 확인할 빌딩의 모든 세대 검사
            for i in range(1,col_lst[j][1]+1):
                # 인덱스를 초과하면 다음으로 넘어감
                if col_lst[j][1]-i <= -1 or col_lst[j][1]-i > len(lst[k-2]):
                    break;
                # 다른 건물 동일 층 주변 4개 건물의 어느 하나라도 0이라면 넘어감
                elif lst[k-2][col_lst[j][1]-i] != 0 or lst[k-1][col_lst[j][1]-i] != 0 or lst[k+1][col_lst[j][1]-i] != 0 or lst[k+2][col_lst[j][1]-i] != 0:
                    break;
                # 전망권 확보 조건 충족시 카운트
                elif lst[k-2][col_lst[j][1]-i] == lst[k-1][col_lst[j][1]-i] == lst[k+1][col_lst[j][1]-i] == lst[k+2][col_lst[j][1]-i] == 0:
                    result += 1
        # 카운트한 수 return
        return result

    new_cheak_lst = cheak(lst,col_lst)
    print(f'#{tc} {cheak_again(lst,new_cheak_lst)}')