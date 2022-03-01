import heapq
from sys import stdin

testcase = int(stdin.readline())
min_heap = []
for i in range(testcase):
    temp = int(stdin.readline())
    if temp == 0:
        if min_heap:
            print(heapq.heappop(min_heap))
        else:
            print(0)
    else:
        heapq.heappush(min_heap, temp)
