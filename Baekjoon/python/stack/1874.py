testcase = int(input())
temp = 1
stack = []
count = 0
result = []
answer = ''

for i in range(1, testcase+1):
    count = 1
    n = int(input())
    while count <= testcase:
        if stack:
            if stack[-1] == n:
                break
        stack.append(temp)
        result.append('+')
        count += 1
        temp += 1
    if stack[-1] == n:
        stack.pop()
        result.append('-')
    else:
        print('NO')
        exit()
for i in result:
    answer += str(i) + '\n'
print(answer)
