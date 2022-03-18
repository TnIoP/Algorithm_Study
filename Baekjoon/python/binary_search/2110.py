from sys import stdin

n, c = map(int, stdin.readline().split())
house_pos = []
for i in range(n):
    house_pos.append(int(stdin.readline()))
house_pos.sort()

high = house_pos[-1] - house_pos[0]
low = 1
answer = 0
while (low <= high):
    mid = (high+low) // 2
    temp = house_pos[0]
    count = 1

    for i in range(1, len(house_pos)):
        if house_pos[i] >= temp+mid:
            count += 1
            temp = house_pos[i]

    if count >= c:
        low = mid + 1
        answer = mid
    else:
        high = mid - 1

print(answer)
