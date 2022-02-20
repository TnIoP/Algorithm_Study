def solution(n, lost, reserve):
    answer = 0
    studentInfo = [1 for i in range(n)]
    for i in range(len(lost)):
        studentInfo[lost[i] - 1] -= 1
    for i in range(len(reserve)):
        studentInfo[reserve[i] - 1] += 1
    for i in range(len(studentInfo)):
        if studentInfo[i] == 0:
            if i == 0:
                if studentInfo[i + 1] == 2:
                    studentInfo[i + 1] -= 1
                    studentInfo[i] += 1
            elif i == len(studentInfo)-1:
                if studentInfo[i - 1] == 2:
                    studentInfo[i - 1] -= 1
                    studentInfo[i] += 1
            else:
                if studentInfo[i - 1] == 2:
                    studentInfo[i - 1] -= 1
                    studentInfo[i] += 1
                elif studentInfo[i + 1] == 2:
                    studentInfo[i + 1] -= 1
                    studentInfo[i] += 1
    for i in range(len(studentInfo)):
        if studentInfo[i] != 0:
            answer += 1
    return answer
