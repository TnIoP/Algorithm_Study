const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const TESTCASE = Number(input[0]);
let stack = [];
let count = 1;
let temp = 0;
let answer = '';

for (let i = 1; i <= TESTCASE; i++) {
    temp = Number(input[i]);

    while (count <= temp) {
        stack.push(count);
        count++;
        answer += '+\n';
    }

    if (stack[stack.length - 1] === temp) {
        answer += '-\n';
        stack.pop();
    } else {
        console.log('NO');
        return;
    }
}

console.log(answer);
