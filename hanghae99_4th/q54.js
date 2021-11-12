function solution(board, moves) {
    var answer = 0;
    let selected = []; // 고른 인형 담을 배열(스택)
    for (let i = 0; i < moves.length; i++) { // moves 차례대로 옮기기
        for (let j = 0; j < board.length; j++) {
            if (board[j][moves[i] - 1] != 0) { // 인형이 있는 높이찾기
                selected.push(board[j][moves[i] - 1]); // 인형 스택에 쌓고
                board[j][moves[i] - 1] = 0; // 보드에서는 인형 삭제
                break;
            }
        }
        // 고른 인형들 중 연속된 두개가 있으면 pop*2, 터진갯수+2
        if (selected.length >= 2 && (selected[selected.length - 1] == selected[selected.length - 2])) {
            selected.pop();
            selected.pop();
            answer += 2;
        }
    }
    return answer;
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]], [1, 5, 3, 5, 1, 2, 1, 4]));
