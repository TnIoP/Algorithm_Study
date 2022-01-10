const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const TESTCASE = input[0];
let temp = [];
let x1, y1, r1, x2, y2, r2, distance, inscribed, circumscribed;

for (let i = 1; i <= TESTCASE; i++) {
    temp = input[i].split(' ').map((num) => parseInt(num));
    x1 = temp[0];
    y1 = temp[1];
    r1 = temp[2];
    x2 = temp[3];
    y2 = temp[4];
    r2 = temp[5];

    distance = Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2);
    inscribed = Math.pow(r1 - r2, 2);
    circumscribed = Math.pow(r1 + r2, 2);

    if (distance === 0) {
        if (r1 === r2) console.log(-1);
        else console.log(0);
    } else if (distance > circumscribed || distance < inscribed) {
        console.log(0);
    } else if (distance === circumscribed || distance === inscribed) {
        console.log(1);
    } else if (distance < circumscribed) {
        console.log(2);
    }
}
