import math
from sys import stdin

testcase = int(stdin.readline())

for i in range(testcase):
    temp = stdin.readline().split()
    n = int(temp[0])
    m = int(temp[1])
    answer = math.factorial(m) // (math.factorial(n) * math.factorial(m - n))
    print(answer)
