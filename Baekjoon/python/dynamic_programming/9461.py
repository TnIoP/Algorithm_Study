from sys import stdin

testcase = int(stdin.readline())
n = []
dp = [1, 1, 1]

for i in range(testcase):
    n.append(int(stdin.readline()))

for i in range(3, max(n)):
    dp.append(dp[i-2]+dp[i-3])

for i in n:
    print(dp[i-1])
