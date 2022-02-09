const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const TESTCASE = input[0];
let tempArr = [];
let tot = 0;
let ave = 0;
let cnt = 0;
let answer = '';

for (let i = 1; i <= TESTCASE; i++) {
    tempArr = input[i].split(' ');
    for (let j = 1; j <= Number(tempArr[0]); j++) tot += Number(tempArr[j]);
    ave = tot / Number(tempArr[0]);

    for (let j = 1; j <= Number(tempArr[0]); j++)
        if (Number(tempArr[j]) > ave) cnt++;
    answer += ((cnt / Number(tempArr[0])) * 100).toFixed(3) + '%\n';

    tot = 0;
    ave = 0;
    cnt = 0;
}

console.log(answer);
