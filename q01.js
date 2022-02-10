function solution(n) {
    var answer = -1;
    const numLength = n.toString().length;
    let tempNum = n;
    let numArr = new Array(numLength);
    let cnt = 0;

    for (let i = 0; i < numLength; i++) {
        numArr[i] = parseInt(tempNum % 10);
        tempNum /= 10;
    }
    let arrUnique = [...new Set(numArr)];

    for (let i = 0; i <= arrUnique.length; i++) {
        if (n % arrUnique[i] === 0) cnt++;
    }
    answer = cnt;

    return answer;
}

console.log(solution(2322)); // 2
console.log(solution(1234)); // 2
