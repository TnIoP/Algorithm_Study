from sys import stdin

num = int(stdin.readline())
factors = [int(i) for i in stdin.readline().split()]

print(max(factors) * min(factors))
