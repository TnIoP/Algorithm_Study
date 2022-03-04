from sys import stdin

n = int(stdin.readline())
count = 0
temp = 665

while n != count:
    temp += 1
    if "666" in str(temp):
        count += 1
print(temp)
