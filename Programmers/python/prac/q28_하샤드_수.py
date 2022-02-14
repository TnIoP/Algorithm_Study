def solution(x):  # q22_자릿수_더하기와 거의 같은 문제
    return x % sum([int(i) for i in str(x)]) == 0
