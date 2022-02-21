def solution(N, stages):
    answer = []
    fail = []
    info = [0 for i in range(N+2)]
    for stage in stages:
        info[stage] += 1
    for i in range(N):
        tot = sum(info[(i + 1):])
        failed = info[i + 1]
        if tot == 0:
            fail.append([i + 1, 0])
        else:
            fail.append([i + 1, failed / tot])
    for item in sorted(fail, key=lambda x: x[1], reverse=True):
        answer.append(item[0])
    return answer
