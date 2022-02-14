def solution(arr):
    minArr = min(arr)  # min의 시간복잡도 : O(n) => 먼저 구하지 않으면 O(n^2)가 되어버림
    answer = [x for x in arr if x > minArr]
    return answer if len(answer) != 0 else [-1]
