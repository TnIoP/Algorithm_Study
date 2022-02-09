const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const TESTCASE = input[0];
let temp = [];
let floor = '';
let roomNum = '';

for (let i = 1; i <= TESTCASE; i++) {
    temp = input[i].split(' ');

    if (Number(temp[2]) % Number(temp[0]) === 0) floor = temp[0];
    else floor = Math.ceil(Number(temp[2]) % Number(temp[0])).toString();

    roomNum = Math.ceil(Number(temp[2]) / Number(temp[0])).toString();

    if (Number(roomNum) < 10) roomNum = '0' + roomNum;

    console.log(floor + roomNum);
}
