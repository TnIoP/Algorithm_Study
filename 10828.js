const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const TESTCASE = input[0]

let stack = []
let temp = []
let answer = ''

for (let i = 1; i <= TESTCASE; i++) {
    temp = input[i].split(' ')
    if (temp[0] === 'push') stack[stack.length] = temp[1]
    else if (temp[0] === 'pop') {
        if (stack.length === 0) answer = answer + '-1\n'
        else answer = answer + stack.pop() + '\n'
    } else if (temp[0] === 'size') answer = answer + stack.length + '\n'
    else if (temp[0] === 'empty') {
        if (stack.length === 0) answer = answer + '1\n'
        else answer = answer + '0\n'
    } else if (temp[0] === 'top') {
        if (stack.length === 0) answer = answer + '-1\n'
        else answer = answer + stack[stack.length - 1] + '\n'
    }
}

console.log(answer)
