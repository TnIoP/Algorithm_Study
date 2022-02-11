function solution(new_id) {
    var answer = new_id
        .toLowerCase() // 1단계
        .replace(/[^\w\-\.]/g, '') // 2단계
        .replace(/[\.]{2,}/g, '.') // 3단계
        .replace(/^\./, '') // 4단계
        .replace(/\.$/, ''); // 4단계
    if (answer.length == 0)
        // 5단계
        answer = 'a';
    if (answer.length >= 16)
        // 6단계
        answer = answer.slice(0, 15).replace(/\.$/, '');
    if (answer.length <= 2)
        // 7단계
        answer = answer.padEnd(3, answer[answer.length - 1]);
    return answer;
}

console.log(solution('...!@BaT#*..y.abcdefghijklm'));
