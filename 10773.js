const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const TESTCASE = input[0];

let stack = [];
let answer = 0;

for (let i = 1; i <= TESTCASE; i++) {
  if (input[i] === "0") stack.pop();
  else stack.push(input[i]);
}

for (let i = 0; i < stack.length; i++) 
    answer += Number(stack[i]);

console.log(answer);
