function solution(n, m) {
    var answer = [];
    const gcd = getGCD(n, m);
    answer.push(gcd); // gcd
    answer.push((n * m) / gcd); // lcm
    return answer;
}

function getGCD(n, m) {
    // 유클리드 호제법
    if (n % m === 0) return m;
    else return getGCD(m, n % m);
}
