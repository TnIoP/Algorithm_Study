const fs = require('fs')
const input = fs
    .readFileSync('/dev/stdin')
    .toString()
    .split('\n')
    .map((num) => parseInt(num))

const MAX = 123456 * 2
let count = 0
let low = 0
let high = 0

let pNum = []
for (let i = 0; i < MAX; i++) pNum[i] = true
pNum[0] = false
pNum[1] = false

for (let i = 2; i <= parseInt(Math.sqrt(MAX)); i++)
    for (let j = 2; i * j <= MAX; j++) pNum[i * j] = false

for (let i = 0; i < input.length; i++) {
    low = Number(input[i])
    high = Number(input[i]) * 2

    for (let j = low + 1; j <= high; j++) if (pNum[j] == true) count++

    if (input[i] === 0) break

    console.log(count)
    count = 0
}
