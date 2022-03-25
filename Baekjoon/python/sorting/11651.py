from sys import stdin

n = int(stdin.readline())
pos = []
for i in range(n):
    pos.append(list(map(int, stdin.readline().split())))
pos.sort(key=lambda x: (x[1], x[0]))
for i in pos:
    print(i[0], i[1])
