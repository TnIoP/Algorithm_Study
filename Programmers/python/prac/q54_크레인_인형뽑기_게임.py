def solution(board, moves):
    answer = 0
    selected = []
    for i in range(len(moves)):
        for j in range(len(board)):
            if board[j][moves[i] - 1] != 0:
                selected.append(board[j][moves[i] - 1])
                board[j][moves[i] - 1] = 0
                break
        if len(selected) >= 2 and selected[len(selected) - 1] == selected[len(selected) - 2]:
            selected.pop()
            selected.pop()
            answer += 2
    return answer
