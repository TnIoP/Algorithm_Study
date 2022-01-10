const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const TESTCASE = Number(input[0])
let temp = input[1].split(' ')
let feeY = 0
let feeM = 0

for (let i = 0; i < TESTCASE; i++) {
    if (Number(temp[i] % 30) === 0)
        feeY += Math.ceil(Number(temp[i]) / 30 + 1) * 10
    else feeY += Math.ceil(Number(temp[i]) / 30) * 10

    if (Number(temp[i] % 60) === 0)
        feeM += Math.ceil(Number(temp[i]) / 60 + 1) * 15
    else feeM += Math.ceil(Number(temp[i]) / 60) * 15
}

if (feeM === feeY) console.log('Y M ' + feeY)
else if (feeM < feeY) console.log('M ' + feeM)
else console.log('Y ' + feeY)
