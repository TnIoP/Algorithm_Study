def solution(n):  # 문제 오류 : n이 int형이 아님
    return int("".join(sorted(str(int(n)), reverse=True)))
