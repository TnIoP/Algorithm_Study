const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const yeondu = input.shift();
const TESTCASE = Number(input.shift());

let l = 0,
    o = 0,
    v = 0,
    e = 0,
    max = 0;
let tempY = [];
let temp = [];
let answer = [];

for (let i = 0; i < TESTCASE; i++) {
    tempY = yeondu.split('');
    for (let j = 0; j < tempY.length; j++) {
        if (tempY[j] == 'L') l++;
        else if (tempY[j] == 'O') o++;
        else if (tempY[j] == 'V') v++;
        else if (tempY[j] == 'E') e++;
    }

    temp = input[i].split('');
    for (let j = 0; j < temp.length; j++) {
        if (temp[j] == 'L') l++;
        else if (temp[j] == 'O') o++;
        else if (temp[j] == 'V') v++;
        else if (temp[j] == 'E') e++;
    }

    if (
        max <=
        ((l + o) * (l + v) * (l + e) * (o + v) * (o + e) * (v + e)) % 100
    ) {
        if (
            max ===
            ((l + o) * (l + v) * (l + e) * (o + v) * (o + e) * (v + e)) % 100
        ) {
            answer.push(input[i]);
        } else {
            answer = [];
            answer.push(input[i]);
        }
        max = ((l + o) * (l + v) * (l + e) * (o + v) * (o + e) * (v + e)) % 100;
    }
    l = 0;
    o = 0;
    v = 0;
    e = 0;
}

console.log(answer.sort()[0]);
