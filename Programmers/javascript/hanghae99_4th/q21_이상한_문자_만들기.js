function solution(s) {
    var answer = '';
    let temp = s.split(' ');
    for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < temp[i].length; j++)
            if (j % 2 === 0) answer += temp[i][j].toUpperCase();
            else answer += temp[i][j].toLowerCase();
        answer += ' ';
    }
    answer = answer.slice(0, -1);
    return answer;
}
