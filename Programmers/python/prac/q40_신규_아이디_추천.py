import re

def solution(new_id):
    answer = re.sub('\.$', '', re.sub('^\.', '', re.sub('[\.]{2,}', '.', re.sub('[^\w\-\.]', '', new_id.lower()))))

    answer = 'a' if len(answer) == 0 else answer[0:15]
    answer = re.sub('\.$', '', answer)
    if len(answer) <= 2:
        answer += "".join([answer[len(answer)-1] for i in range(3-len(answer))])
    return answer
