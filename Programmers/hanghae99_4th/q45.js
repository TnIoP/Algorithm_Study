function solution(array, commands) {
    var answer = [];
    for(let i=0; i<commands.length; i++)
        answer.push(sliceNum(array, commands[i][0], commands[i][1], commands[i][2]));
    return answer;
}

function sliceNum(arr, a, b, c){
    let temp = arr.slice(a-1, b);
    temp.sort(function(a, b){
        return a - b;
    });
    return temp[c-1];
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));
