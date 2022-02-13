function solution(answers) {
    var answer = [];

    const p1 = [1, 2, 3, 4, 5];
    const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let count = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === p1[i % 5]) count[0]++;
        if (answers[i] === p2[i % 8]) count[1]++;
        if (answers[i] === p3[i % 10]) count[2]++;
    }

    const maxCnt = Math.max(...count);

    for (let i = 0; i < 3; i++) if (maxCnt === count[i]) answer.push(i + 1);

    return answer;
}
