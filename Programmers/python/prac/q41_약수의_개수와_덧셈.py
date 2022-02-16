def solution(left, right):
    answer = 0
    for i in range(left, right+1):
        answer += i if get_number_of_factors(i) else -i
    return answer


def get_number_of_factors(num):
    count = 0
    for i in range(1, num+1):
        if num % i == 0:
            count += 1
    return True if count % 2 == 0 else False
