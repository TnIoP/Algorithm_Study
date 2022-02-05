const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let tempStr;
let stack = [];
let answer = new Array(input.length - 1).fill('yes');

for (let i = 0; i < input.length - 1; i++) {
    tempStr = input[i].split('');

    for (let j = 0; j < tempStr.length; j++) {
        if (tempStr[j] === '(' || tempStr[j] === '[') 
            stack.push(tempStr[j]);
        if (tempStr[j] === ')' || tempStr[j] === ']') {
            if (stack.length === 0) {
                answer[i] = 'no';
                break;
            }
            if (stack[stack.length - 1] === '(' && tempStr[j] === ')')
                stack.pop();
            else if (stack[stack.length - 1] === '[' && tempStr[j] === ']')
                stack.pop();
            else {
                answer[i] = 'no';
                break;
            }
        }
    }

    if (stack.length !== 0) 
        answer[i] = 'no';
    stack = [];
    console.log(answer[i]);
}
