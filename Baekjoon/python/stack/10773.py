testcase = int(input())
stack = []
for i in range(testcase):
    temp = int(input())
    stack.pop() if temp == 0 else stack.append(temp)
print(sum(stack))
