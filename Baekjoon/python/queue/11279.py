import heapq
from sys import stdin

testcase = int(stdin.readline())
max_heap = []
for i in range(testcase):
    temp = int(stdin.readline())
    if temp == 0:
        if max_heap:
            print(heapq.heappop(max_heap)[1])
        else:
            print(0)
    else:
        heapq.heappush(max_heap, (-temp, temp))
