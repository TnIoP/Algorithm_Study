function solution(nums) {
    var answer = 0;
    let sum3num = 0;

    for (
        let i = 0;
        i < nums.length;
        i++ // 배열 요소 중 숫자 3개 합
    )
        for (let j = i + 1; j < nums.length; j++)
            for (let k = j + 1; k < nums.length; k++) {
                sum3num = nums[i] + nums[j] + nums[k];
                if (isPNum(sum3num) == true) answer++; // 소수 맞으면 ++
            }
    return answer;
}

function isPNum(num) {
    // 소수 check
    var pCheck = true;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            pCheck = false;
            break;
        }
    }
    return pCheck;
}

console.log(isPNum(4));
console.log(solution([1, 2, 3, 4]));
