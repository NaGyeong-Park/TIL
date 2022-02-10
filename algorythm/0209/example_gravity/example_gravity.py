import sys

sys.stdin = open("input.txt")

"""
이 문제는, 블록들을 움직이는 것보다, 블록탑을 움직이도록 생각하는게 쉽습니다.
"""


T = int(input())
for tc in range(1, T + 1):

    n = int(input())  # 블럭의 개수 (가로 길이)
    lst = list(map(int, input().split()))  # 블럭 높이
    max_drop = 0  # 우리의 답

    for i in range(n):
        now = lst[i]  # 현재 블록탑의 높이
        temp_drop = 0  # 이번 블록탑이 떨어지는 최대 높이

        # j는 떨어질 블록탑의 다음 블록탑 idx
        for j in range(i + 1, n):

            # 이번 블록탑을 기준으로 계산한 떨어지는 최대 높이가, max_drop 보다 작으면 갱신
            if now > lst[j]:
                temp_drop += 1

        if temp_drop > max_drop:
            max_drop = temp_drop

    print(f"#{tc} {max_drop}")