function solution(s) {
    var answer = 0;
    let tempArr = s;
    for (let i = 0; i < tempArr.length; i++) {
        if (i === tempArr.length - 1) break;

        if (parseInt(answer % 2) === 0) {
            if (parseInt(i % 2) === 0) {
                if (tempArr[i] >= tempArr[i + 1]) answer++;
            } else {
                if (tempArr[i] <= tempArr[i + 1]) answer++;
            }
        } else {
            if (parseInt(i % 2) === 0) {
                if (tempArr[i] <= tempArr[i + 1]) answer++;
            } else {
                if (tempArr[i] >= tempArr[i + 1]) answer++;
            }
        }
    }

    return answer;
}

console.log(solution([1, 2, 3])); // 1
console.log(solution([3, -1, 0, 4])); // 2
