const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const TESTCASE = input[0];

let cnt = TESTCASE;

for (let i = 1; i <= TESTCASE; i++) {
    let temp = {};
    for (let j = 0; j < input[i].length; j++) {
        if (!temp[input[i][j]]) {
            temp[input[i][j]] = true;
        } else if (input[i][j] !== input[i][j - 1]) {
            cnt--;
            break;
        }
    }
}

console.log(cnt);
