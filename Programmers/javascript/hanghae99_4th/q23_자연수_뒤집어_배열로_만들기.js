function solution(n) {
    var answer = [];
    var tempNum = n.toString().length;
    for (let i = 0; i < tempNum; i++) {
        answer[i] = parseInt(n % 10);
        n /= 10;
    }
    return answer;
}
