from sys import stdin

t = int(stdin.readline())

for i in range(t):
    n = int(stdin.readline())
    count_0 = 1
    count_1 = 0
    temp = 0
    for i in range(n):
        temp = count_1
        count_1 = count_1 + count_0
        count_0 = temp
    print(count_0, count_1)
