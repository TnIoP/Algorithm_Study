function solution(nums) {
    var answer = 0;
    let kinds = Array.from(new Set(nums));
    if(nums.length/2 < kinds.length)
        answer = nums.length/2;
    else
        answer = kinds.length;
    return answer;
}

console.log(solution([3,3,3,2,2,2]))