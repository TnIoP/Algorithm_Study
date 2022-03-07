from sys import stdin

def make_decompose_sum(n):
    num = n
    sum = n
    while num != 0:
        sum += num % 10
        num //= 10
    return sum

n = int(stdin.readline())
answer = []
temp_num = n
temp = make_decompose_sum(temp_num)

while temp_num != 0:
    temp_num -= 1
    temp = make_decompose_sum(temp_num)
    if n == temp:
        answer.append(temp_num)
print(min(answer)) if answer else print(0)
