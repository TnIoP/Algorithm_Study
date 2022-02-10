const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

let num = parseInt(input);
let answer = 1;
for (let i = 1; i <= num; i++) {
    answer += (i + 1) * 2 + i - 1;
}
console.log(answer % 45678);
