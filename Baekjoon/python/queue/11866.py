from sys import stdin

info = stdin.readline().split()
n = int(info[0])
k = int(info[1])
queue = [i for i in range(1, int(n)+1)]
answer = []

while queue:
    for i in range(k-1):
        queue.append(queue.pop(0))
    answer.append(str(queue.pop(0)))
print("<" + ", ".join(answer) + ">")
