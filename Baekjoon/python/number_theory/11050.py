import math
from sys import stdin

temp = stdin.readline().split()
n = int(temp[0])
k = int(temp[1])
print(math.factorial(n) // (math.factorial(k) * math.factorial(n-k)))
