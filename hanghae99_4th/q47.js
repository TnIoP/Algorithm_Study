function solution(n) {
    let pNum = [];
    let count = 0;
    for(let i=0; i<n; i++) // 배열 초기화
        pNum[i] = i+1;
    for(let i=2; i<=Math.sqrt(n); i++) // 에라토스테네스의 채로 거른다. n의 제곱근까지만 체크
        for(let j=2; i*j<=n; j++){ // j=1일 때는 그 수가 소수이므로 제외, i*j는 배수
            if(pNum[i*j-1] != 0)
                pNum[i*j-1] = 0;
        }
    pNum.splice(0, 1);
    for(let i=0; i<pNum.length; i++)
        if(pNum[i] != 0) // 배열 0이면 삭제
            count++;
    return count;
}

console.log(solution(30));
console.log(Math.sqrt(30));