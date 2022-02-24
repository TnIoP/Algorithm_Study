testcase = int(input())
for i in range(testcase):
    strings = list(input())
    count = 0
    for j in range(len(strings)):
        if strings[j] == '(':
            count += 1
        else:
            count -= 1
        if j == len(strings)-1:
            if count == 0:
                print('YES')
            else:
                print('NO')
            break
        if count == -1:
            print('NO')
            break
