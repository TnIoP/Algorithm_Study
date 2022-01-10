const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ')

const MIN = Number(input[0])
const MAX = Number(input[1])
let pNum = []

for (let i = 0; i < MAX; i++) pNum[i] = i + 1
for (let i = 2; i <= Math.sqrt(MAX); i++)
    for (let j = 2; i * j <= MAX; j++)
        if (pNum[i * j - 1] != 0) pNum[i * j - 1] = 0

for (let i = MIN - 1; i < pNum.length; i++)
    if (pNum[i] != 0 && pNum[i] != 1) console.log(pNum[i])
