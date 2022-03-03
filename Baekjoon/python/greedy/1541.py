from sys import stdin

temp = stdin.readline().split('-')
answer = 0

for i in temp[0].split('+'):
    answer += int(i)
for i in temp[1:]:
    for j in i.split('+'):
        answer -= int(j)
print(answer)
