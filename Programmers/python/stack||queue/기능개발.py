import math


def solution(progresses, speeds):
    answer = []
    date = [int(math.ceil(float(100-progresses[i])/float(speeds[i])))
            for i in range(len(progresses))]

    if len(date) == 1:
        return [1]

    count = 1
    pointer = 0
    for i in range(len(date)):
        if date[pointer] >= date[i]:
            if i != 0:
                count+=1
        else:
            answer.append(count)
            count = 1
            pointer = i
        if i == len(date)-1:
            if date[len(date)-2] < date[len(date)-1]:
                answer.append(1)
            else:
                answer.append(count)
    return answer


print(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))
