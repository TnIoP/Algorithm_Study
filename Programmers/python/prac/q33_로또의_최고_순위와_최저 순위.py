def solution(lottos, win_nums):
    temp = [n for n in lottos if n in win_nums]
    max = 7 - (lottos.count(0)+len(temp)) if (lottos.count(0)+len(temp)) >= 1 else 6
    min = 7 - len(temp) if len(temp) >= 1 else 6
    return [max, min]
