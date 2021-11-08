function solution(arr) {
    var answer = [];
    var num = 0;
    for(let i=0; i<arr.length; i++){
        if(num == 0)
            num = arr[i];
        if(arr[[i]] < num)
            num = arr[i];
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i] == num){
            arr.splice(i,1);
            break;
        }
    }
    answer = arr;
    return answer;
}

console.log(solution([1, 2, 3, 4, 5]));