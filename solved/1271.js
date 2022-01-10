var fs = require('fs')
var input = fs.readFileSync('/dev/stdin').toString().split(' ').map(BigInt)

console.log(input[0] / input[1] + '\n' + (input[0] % input[1]))
