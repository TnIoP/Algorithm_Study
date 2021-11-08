function solution(n) {
    var answer = [];
    var tempNum = n.toString().length;
    for(let i=0; i<tempNum; i++){
        answer[i] = parseInt(n%10);
        n /= 10;
    }
    return answer;
}

console.log(solution(1000000600));

// function solution(n) {
//     var answer = [];
//     var temp = [];
//     var tempNum = 0;
//     temp = n.toString().split('');
//     console.log(temp);
//     for(let i=temp.length-1; i>=0; i--){
//         tempNum += temp[i]*Math.pow(10, i);
//     }
//     console.log(tempNum);
//     answer = tempNum.toString().split('');
//     for(let i=0; i<answer.length; i++){
//         answer[i] = parseInt(answer[i]);
//     }
//     return answer;
// }