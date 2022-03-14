from sys import stdin

n, k = map(int, stdin.readline().split())

item = [[0, 0]]
dp = [[0]*(k+1) for _ in range(n+1)]

for i in range(n):
    item.append(list(map(int, stdin.readline().split())))

for i in range(1, n+1):
    for j in range(1, k+1):
        weight = item[i][0]
        val = item[i][1]

        if j < weight:
            dp[i][j] = dp[i-1][j]
        else:
            dp[i][j] = max(dp[i-1][j], dp[i-1][j-weight]+val)

print(dp[n][k])
