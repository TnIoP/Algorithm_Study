function solution(expression) {
    let answer = [];

    const operator = [
        // 연산자
        ['+', '-', '*'],
        ['+', '*', '-'],
        ['-', '+', '*'],
        ['-', '*', '+'],
        ['*', '+', '-'],
        ['*', '-', '+'],
    ];

    for (let i = 0; i < operator.length; i++) {
        // 정해놓은 우선순위 경우의 수 6가지만큼 반복
        const temp = expression.split(/([\+\-\*])/); // 수식 쪼개서 temp 저장
        for (let j = 0; j < temp.length; j++)
            if (temp[j].match(/[0-9]/))
                // 문자를 숫자로
                temp[j] = Number(temp[j]);

        for (let j = 0; j < operator[i].length; j++) {
            // 수식 3개만큼 반복
            while (temp.includes(operator[i][j])) {
                // 정해놓은 수식의 우선순위 순서대로 수식에 포함된 모든 연산자를 수행.
                const index = temp.indexOf(operator[i][j]); // 일치하는 수식의 인덱스
                if (operator[i][j] === '+')
                    // 덧셈
                    temp[index - 1] += temp[index + 1];
                else if (operator[i][j] === '-')
                    // 뺄셈
                    temp[index - 1] -= temp[index + 1];
                else if (operator[i][j] === '*')
                    // 곱셈
                    temp[index - 1] *= temp[index + 1];

                temp.splice(index, 2); // 해당 수식을 수행했으므로 수식과 수식 뒤에 숫자 삭제
            }
        }
        answer.push(Math.abs(temp[0])); // 수식 수행 결과 저장
    }
    return Math.max(...answer); // 최대값 반환
}

console.log(solution('100-200*300-500+20'));
console.log(solution('50*6-3*2'));
