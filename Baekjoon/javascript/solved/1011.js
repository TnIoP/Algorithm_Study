const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const TESTCASE = input[0];
let temp = [];
let distance = 0;
let maxTemp = 0;

for (let i = 1; i <= TESTCASE; i++) {
    temp = input[i].split(' ');
    distance = Number(temp[1]) - Number(temp[0]);
    maxTemp = Math.round(Math.sqrt(distance));

    if (distance > Math.pow(maxTemp, 2)) console.log(maxTemp * 2);
    else console.log(maxTemp * 2 - 1);
}
