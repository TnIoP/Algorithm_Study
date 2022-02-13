function solution(n) {
    var answer = 0;
    let temp = String(n);
    for (var i = 0; i < temp.length; i++) answer += parseInt(temp[i]);
    return answer;
}
