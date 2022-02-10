import sys

sys.stdin = open('input1.txt')

T = int(input())

for tc in range(1, T + 1):
    # input 텍스트파일의 Test Case를 입력받아준다.
    num = int(input())
    # 숫자를 count 해줄 리스트 생성
    coun = [0] * 12
    # 숫자 count
    for i in range(6):
        coun[num % 10] += 1
        num //= 10

    i = 0
    tri = run = 0

    # 0~9까지 진행
    while i < 10:
        # tri와 run은 둘다 진행해줘야한다.
        # (하나 충족시켰다고 넘어가기 없기)

        # tri 찾고 숫자 빼주기
        if coun[i] >= 3:
            coun[i] -= 3
            tri += 1
            continue;

        # run 찾고 숫자 빼주기
        if coun[i] >= 1 and coun[i + 1] >= 1 and coun[i + 2] >= 1:
            coun[i] -= 1
            coun[i + 1] -= 1
            coun[i + 2] -= 1
            run += 1
            continue;
        i += 1

    # run과 tri 둘다 만족 / run 2개 / tri 2개 일 때 1 출력
    if run + tri == 2:
        print(f"#{tc} 1")
    # 하나만 만족 or 불만족시 0 출력
    else:
        print(f"#{tc} 0")