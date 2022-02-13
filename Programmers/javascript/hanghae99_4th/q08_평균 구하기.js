function solution(arr) {
    var answer = 0;
    var temp_ave = 0;
    for (let i = 0; i < arr.length; i++) temp_ave += arr[i];
    answer = temp_ave / arr.length;
    return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
