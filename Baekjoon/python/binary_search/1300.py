from sys import stdin

n = int(stdin.readline())
k = int(stdin.readline())
high = n*n
low = 1

while(low <= high):
    mid = (low + high) // 2
    count = 0
    for i in range(1, n+1):
        count += min(mid//i, n)

    if count >= k:
        answer = mid
        high = mid-1
    else:
        low = mid+1
print(answer)
