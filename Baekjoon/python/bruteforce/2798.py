from sys import stdin
from itertools import combinations

info = stdin.readline().split()
n = int(info[0])
m = int(info[1])
card = [int(i) for i in stdin.readline().split()]
temp = [sum(i) for i in list(combinations(card, 3))]
answer = 0

for i in temp:
    if answer < i <= m:
        answer = i
    if answer == m:
        break
print(answer)
