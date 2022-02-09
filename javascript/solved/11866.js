const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let temp = [];
const num = Number(input[1]);
let count = Number(input[0]);
let result = [];
let answer = '<';

for (let i = 0; i < count; i++) {
    temp[i] = i + 1;
}

while (count !== 0) {
    for (let i = 0; i < num - 1; i++) {
        temp.push(temp[0]);
        temp.shift();
    }
    result.push(temp[0]);
    temp.shift();
    count--;
}

for (let i = 0; i < result.length; i++) {
    answer += result[i] + ', ';
}

answer = answer.replace(/,\s$/, '>');

console.log(answer);
