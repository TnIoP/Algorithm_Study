const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const TESTCASE = Number(input[0]);
let temp = [];
let tempCnt = 0;

for (let i = 1; i <= TESTCASE; i++) {
    temp = input[i].split('');

    for (let j = 0; j < temp.length; j++) {
        if (temp[j] === '(') 
            tempCnt++;
        else 
            tempCnt--;
        if (j === temp.length - 1) {
            if (tempCnt === 0) 
                console.log('YES');
            else 
                console.log('NO');
            tempCnt = 0;
            break;
        }
        if (tempCnt === -1) {
            console.log('NO');
            tempCnt = 0;
            break;
        }
    }
}
