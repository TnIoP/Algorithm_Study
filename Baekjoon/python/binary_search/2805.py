from sys import stdin

n, m = map(int, stdin.readline().split())
tree = list(map(int, stdin.readline().split()))

high = max(tree)
low = 1

while low <= high:
    mid = (high+low) // 2
    temp = 0
    for t in tree:
        if t > mid:
            temp += t - mid
    if temp < m:
        high = mid - 1
    else:
        low = mid + 1
print(high)