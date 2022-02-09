const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = Number(input[0]);
let b = Number(input[1]);
let answer = '';

if (b - 45 < 0) {
    if (a === 0) answer += '23';
    else answer += a - 1;
    answer += ' ' + (b + 15);
} else answer += a + ' ' + (b - 45);

console.log(answer);
