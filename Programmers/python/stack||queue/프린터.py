def solution(priorities, location):
    queue = priorities
    seq = [i for i in range(len(priorities))]
    count = 0
    result = []

    while len(queue) != 0:
        if(max(queue) == queue[0]):
            count += 1
            if location == seq[0]:
                return count
            result.append(queue.pop(0))
            seq.pop(0)
        else:
            queue.append(queue.pop(0))
            seq.append(seq.pop(0))
