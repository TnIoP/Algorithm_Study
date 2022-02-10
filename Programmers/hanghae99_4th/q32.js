function solution(numbers) {
    var answer = [];
    var temp = 0;
    for(let i=0; i<numbers.length-1; i++){
        for(let j=i+1; j<numbers.length; j++){
            temp = numbers[i]+numbers[j];
            answer.push(temp);
        }
    }
    const set = Array.from(new Set(answer));
    answer = set;
    answer.sort(function(a, b){
        return a - b;
    });
    return answer;
}

console.log(solution([3,4,5,1,2]));