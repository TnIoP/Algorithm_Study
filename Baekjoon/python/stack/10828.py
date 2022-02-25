testcase = int(input())

stack = []
temp = []
answer = ''

for i in range(testcase):
    temp = input().split()
    if temp[0] == 'push':
        stack.append(temp[1])
    elif temp[0] == 'pop':
        answer += '-1\n' if len(stack) == 0 else stack.pop() + '\n'
    elif temp[0] == 'size':
        answer += str(len(stack)) + '\n'
    elif temp[0] == 'empty':
        answer += '1\n' if len(stack) == 0 else '0\n'
    elif temp[0] == 'top':
        answer += '-1\n' if len(stack) == 0 else stack[len(stack) - 1] + '\n'
print(answer)
