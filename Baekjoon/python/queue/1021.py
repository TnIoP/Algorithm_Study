from sys import stdin

info = stdin.readline().split()
position = [int(i) for i in stdin.readline().split()]
queue = [i for i in range(1, int(info[0])+1)]
answer = 0

for i in range(len(position)):
    target_index = queue.index(position[i])
    while queue[0] != position[i]:
        queue.append(queue.pop(0)) if target_index < len(queue) - target_index else queue.insert(0, queue.pop())
        answer += 1
    queue.pop(0)
print(answer)
