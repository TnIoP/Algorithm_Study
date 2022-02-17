def solution(d, budget):
    answer = 0
    temp = 0
    d.sort()
    for i in range(len(d)):
        temp += d[i]
        answer += 1
        if(temp > budget):
            answer -= 1
    return answer
