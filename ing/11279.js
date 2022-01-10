const fs = require('fs')
const input = fs.readFileSync('ex.txt').toString().split('\n')

const TESTCASE = input[0]
let temp = []

for (let i = 1; i <= TESTCASE; i++) {
    if (Number(input[i]) === 0) {
        if (temp.length === 0) {
            console.log(0)
        } else {
            temp.sort((a, b) => a - b)
            console.log(temp.pop())
        }
    } else {
        temp.push(Number(input[i]))
    }
}
