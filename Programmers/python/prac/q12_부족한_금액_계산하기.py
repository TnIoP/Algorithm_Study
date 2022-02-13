def solution(price, money, count):
    temp = sum([price*num for num in range(1, count+1)])
    if money <= temp:
        return temp - money
    else:
        return 0
