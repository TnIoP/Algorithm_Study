function solution(s) {
    var answer = true;
    var temp = s.split('')
    if(!(s.length >= 1 && s.length <= 8))
        answer = false;
    if(!(s.length == 4 || s.length == 6))
        answer = false;
    for(let i=0; i<temp.length; i++){
        if(isNaN(temp[i]))
            answer = false;
    }       
    return answer;
}


console.log(solution("123aa"));

// function solution(s) {
//     var answer = false;
//     if(s.length >= 1 && s.length <= 8 )
//         if(s.length == 4 || s.length == 6)
//             answer = !(isNaN(s));
//     return answer;
// }