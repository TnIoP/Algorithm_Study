while True:
    temp = input()
    if temp == '.':
        break
    stack = []
    answer = "yes"
    for i in temp:
        if i == '(' or i == '[':
            stack.append(i)
        if i == ')' or i == ']':
            if len(stack) == 0:
                answer = "no"
                break
            if stack[-1] == '(' and i == ')':
                stack.pop()
            elif stack[-1] == '[' and i == ']':
                stack.pop()
            else:
                answer = "no"
                break
    if len(stack) != 0:
        answer = "no"
    print(answer)
