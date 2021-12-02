const fs = require("fs");
const input = fs.readFileSync("ex.txt").toString().split("\n")

const TESTCASE = input[0];
let temp = []
let x1, y1, r1, x2, y2, r2, distanceX, distanceY;


for (let i = 1; i <= TESTCASE; i++) {
    temp = input[i].split(" ").map((num) => parseInt(num));
    x1 = temp[0];
    y1 = temp[1];
    r1 = temp[2];
    x2 = temp[3];
    x2 = temp[4];
    x2 = temp[5];
    


    console.log(temp)

}