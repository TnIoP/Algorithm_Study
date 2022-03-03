from sys import stdin

info = stdin.readline().split()
n = int(info[0])
won = int(info[1])
coin = [int(stdin.readline()) for i in range(n)]
coin.sort(reverse=True)
answer = 0
index = 0

while True:
    if won // coin[index] > 0:
        answer += won // coin[index]
        won %= coin[index]
    index += 1
    if won == 0:
        break
print(answer)
