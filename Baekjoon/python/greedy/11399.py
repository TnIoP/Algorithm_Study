from sys import stdin

testcase = int(stdin.readline())
info = [int(i) for i in stdin.readline().split()]
info.sort()
answer = 0

for i in range(testcase):
    answer += info[i]*(testcase-i)

print(answer)
