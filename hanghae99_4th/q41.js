function solution(left, right) {
    var answer = 0;
    for(let i=left; i<=right; i++){
        if(getNumberOfFactors(i) === 1) // 약수의 개수 == 짝수면 더하고
            answer += i;
        else // 약수의 개수 == 홀수면 뺀다
            answer -= i;
    }
    return answer;
}

function getNumberOfFactors(num){
    let count = 0;
    for(let i=1; i<=num; i++)
        if(num%i == 0)
            count++;
    if(count % 2 == 0) // 약수의 개수 == 짝수
        return 1;
    return 0; // 약수의 개수 == 홀수
}

console.log(solution(13, 17));

// function solution(left, right) {
//     var answer = 0;
//     for (let i = left; i <= right; i++) {
//         if (Number.isInteger(Math.sqrt(i))) // 제곱근이 정수면 약수의 개수는 홀수
//             answer -= i;
//         else
//             answer += i;
//     }
//     return answer;
// }