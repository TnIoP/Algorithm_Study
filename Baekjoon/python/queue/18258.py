from collections import deque
from sys import stdin

testcase = int(stdin.readline())
queue = deque()
answer = ""
for i in range(testcase):
    temp = stdin.readline().split()
    if temp[0] == "push":
        queue.append(temp[1])
    elif temp[0] == "pop":
        answer += queue.popleft() if queue else "-1"
        answer += "\n"
    elif temp[0] == "size":
        answer += str(len(queue)) + "\n"
    elif temp[0] == "empty":
        answer += "0" if queue else "1"
        answer += "\n"
    elif temp[0] == "front":
        answer += str(queue[0]) if queue else "-1"
        answer += "\n"
    elif temp[0] == "back":
        answer += str(queue[-1]) if queue else "-1"
        answer += "\n"
print(answer)
