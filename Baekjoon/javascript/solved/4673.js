function cal(num) {
    // 자릿수마다 더하기 위해 만든 함수
    let n = num;
    let sum = n;
    while (n > 0) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }
    return sum;
}

let selfNum = new Array(10001).fill(0);

for (let i = 1; i <= selfNum.length; i++)
    if (cal(i) < selfNum.length) selfNum[cal(i)] = 1;

for (let i = 1; i <= selfNum.length; i++) if (selfNum[i] === 0) console.log(i);
