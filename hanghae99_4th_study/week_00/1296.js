const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().split("\n");

const yeondu = input[0];
const TESTCASE = Number(input[1]);
input[0] = "";
input[1] = "";
input.sort();


let l = 0, o = 0, v = 0, e = 0, max = 0, index = 2;
let tempY = [];
let temp = [];

for (let i = 2; i < TESTCASE+2; i++) {
  tempY = yeondu.split("");
  for (let j = 0; j < tempY.length; j++) {
    if (tempY[j] === "L") l++;
    else if (tempY[j] === "O") o++;
    else if (tempY[j] === "V") v++;
    else if (tempY[j] === "E") e++;
  }

  temp = input[i].split("");
  console.log(temp)
  for (let j = 0; j < temp.length; j++) {
    if (temp[j] === "L") l++;
    else if (temp[j] === "O") o++;
    else if (temp[j] === "V") v++;
    else if (temp[j] === "E") e++;
  }

  if (max < ((l + o) * (l + v) * (l + e) * (o + v) * (o + e) * (v + e)) % 100) {
    max = ((l + o) * (l + v) * (l + e) * (o + v) * (o + e) * (v + e)) % 100;
    index = i;
  }
  l = 0;
  o = 0;
  v = 0;
  e = 0;
}

console.log(input[index])