def solution(s, n):
    answer = ''
    upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    lower = "abcdefghijklmnopqrstuvwxyz"
    index = 0

    for i in range(len(s)):
        if(s[i] == ' '):
            answer += ' '
            continue

        selectCase = upper if s[i].isupper() else lower
        index = selectCase.find(s[i])+n
        if index >= len(selectCase):
            index -= len(selectCase)
        answer += selectCase[index]

    return answer
