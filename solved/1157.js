const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

let word = input.toUpperCase().split('');
let cnt = new Array(26).fill(0);
let max = 0;
let idx = 0;
let maxCnt = 0;

for(let i=0; i<word.length; i++) {
    cnt[word[i].charCodeAt(0)-65]++;
}

for (let i = 0; i < cnt.length; i++)
    if (max < cnt[i]) {
        max = cnt[i];
        idx = i;
    }

for (let i = 0; i < cnt.length; i++) 
    if (max === cnt[i]) maxCnt++;

if (maxCnt > 1) 
    console.log('?');
else 
    console.log(String.fromCharCode(idx+65));