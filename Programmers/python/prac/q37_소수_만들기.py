from itertools import combinations
import math

def solution(nums):
    answer = 0
    num_list = [sum(num) for num in combinations(nums, 3)]
    for i in range(len(num_list)):
        if prime_num(num_list[i]):
            answer += 1
    return answer


def prime_num(n):
    for i in range(2, int(math.sqrt(n))+1):
        if n % i == 0:
            return False
    return True

