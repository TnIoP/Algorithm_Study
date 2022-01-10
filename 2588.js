const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

let a = Number(input[0])
let b = Number(input[1])
let b_1 = Math.floor(b % 10)
let b_10 = Math.floor((input[1] % 100) / 10)
let b_100 = Math.floor(input[1] / 100)

console.log(a * b_1)
console.log(a * b_10)
console.log(a * b_100)
console.log(a * b)
