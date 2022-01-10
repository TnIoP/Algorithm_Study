const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

let num = Number(input);
let sum;
let count = 0;

while (true) {
  count++;
  sum = Math.floor(num / 10) + (num % 10);
  num = (num % 10) * 10 + (sum % 10);

  if (Number(input) === num) 
    break; 
}

console.log(count);
