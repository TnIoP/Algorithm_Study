def solution(dartResult):
    answer = []
    dartResult = dartResult.replace('10', 'k')
    score = ['10' if i == 'k' else i for i in dartResult]

    i = -1
    sdt = ['S', 'D', 'T']
    for j in score:
        if j in sdt:
            answer[i] = pow(answer[i], (sdt.index(j)+1))
        elif j == '*':
            answer[i] *= 2
            if i != 0:
                answer[i - 1] *= 2
        elif j == '#':
            answer[i] *= (-1)
        else:
            answer.append(int(j))
            i += 1
    return sum(answer)
