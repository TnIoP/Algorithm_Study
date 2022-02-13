function solution(price, money, count) {
    var answer = -1;
    let temp = 0;
    for (let i = 1; i <= count; i++) temp += price * i;

    if (temp <= money) answer = 0;
    else answer = temp - money;

    return answer;
}
