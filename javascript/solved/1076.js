const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const resistance = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
};
console.log(
    (resistance[input[0]] * 10 + resistance[input[1]]) *
        Math.pow(10, resistance[input[2]])
);
