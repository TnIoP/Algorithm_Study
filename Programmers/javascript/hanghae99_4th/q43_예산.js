function solution(d, budget) {
    var answer = 0;
    let sum = 0;
    d.sort(function (a, b) {
        return a - b;
    });
    for (let i = 0; i < d.length; i++) {
        sum += d[i];
        answer++;
        if (sum > budget) answer--;
    }
    return answer;
}

console.log(solution([2, 2, 3, 3], 10));
