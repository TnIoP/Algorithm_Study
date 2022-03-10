from sys import stdin

stairs = [0 for i in range(301)]
dp = [0 for i in range(301)]

testcase = int(stdin.readline())
for i in range(testcase):
    stairs[i] = int(stdin.readline())

dp[0] = stairs[0]
dp[1] = stairs[0] + stairs[1]
dp[2] = max(stairs[1] + stairs[2], stairs[0] + stairs[2])

for i in range(3, testcase):
    dp[i] = max(dp[i - 3] + stairs[i - 1] + stairs[i], dp[i - 2] + stairs[i])
print(dp[testcase - 1])
