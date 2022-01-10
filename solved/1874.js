const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const TESTCASE = input[0]
let temp = []
let stack = []
let count = 0
let result = []
let answer = ''

for (let i = 0; i < TESTCASE; i++) {
    temp[i] = i + 1
}

for (let i = 1; i <= TESTCASE; i++) {
    count = 1

    while (count <= TESTCASE && stack[stack.length - 1] != input[i]) {
        stack.push(temp[0])
        temp.shift()
        result.push('+')
        count++
    }

    if (stack[stack.length - 1] == input[i]) {
        stack.pop()
        result.push('-')
    } else {
        console.log('NO')
        return
    }
}

for (let i = 0; i < result.length; i++) {
    answer += result[i] + '\n'
}

console.log(answer)
