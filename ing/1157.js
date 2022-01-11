const fs = require('fs');
const input = fs.readFileSync('ing/ex.txt').toString();

let word = input.toUpperCase().split('');
let wordUnique = [...new Set(word)];
let cnt = new Array(wordUnique.length).fill(0);
let max = 0;
let idx = 0;
let maxCnt = 0;

for (let i = 0; i < wordUnique.length; i++)
    for (let j = 0; j < word.length; j++)
        if (word[j] === wordUnique[i]) cnt[i]++;

for (let i = 0; i < cnt.length; i++)
    if (max < cnt[i]) {
        max = cnt[i];
        idx = i;
    }

for (let i = 0; i < cnt.length; i++) if (max === cnt[i]) maxCnt++;

if (maxCnt > 1) console.log('?');
else console.log(wordUnique[idx]);
