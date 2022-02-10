const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const answer = input.replace(/c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g, '*');

console.log(answer.length);
