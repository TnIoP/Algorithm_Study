function solution(lottos, win_nums) {
    let answer = [];
    let matchingNum = 0;
    let countZero = 0;

    for (let i = 0; i < lottos.length; i++) {
        if (lottos[i] == 0) countZero++;
        if (win_nums.includes(lottos[i])) matchingNum++;
    }
    answer.push(getRate(matchingNum + countZero));
    answer.push(getRate(matchingNum));
    return answer;
}

function getRate(count) {
    if (count >= 2 && count <= 6) return 7 - count;
    else return 6;
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
