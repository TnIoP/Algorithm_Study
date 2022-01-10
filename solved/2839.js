const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

const BIG = 5;
const SMALL = 3;

let answer = Math.floor(Number(input) / BIG);
let remainder = 0;

while (answer >= 0) {
    remainder = input - answer * BIG;
    if (remainder % SMALL === 0) {
        console.log(answer + remainder / SMALL);
        return;
    }
    answer--;
}

console.log(-1);
