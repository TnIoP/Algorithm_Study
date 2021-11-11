function solution(s, n) {
    var answer = '';
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 대문자
    let lower = "abcdefghijklmnopqrstuvwxyz"; // 소문자
    let selectCase = '';
    let index = 0;

    for(var i =0; i <s.length; i++){
        if(s[i] == ' ') {  // 공백이면 pass
            answer += ' '; 
            continue;
        }
        selectCase = upper.includes(s[i]) ? upper : lower; // 대소문자 확인
        index = selectCase.indexOf(s[i])+n; // n만큼 이동
        if(index >= selectCase.length) // 오버됐을 경우 전체길이만큼 한번 빼주면 초기화
            index -= selectCase.length;
        answer += selectCase[index];
    }
    return answer;
}

console.log(solution("AB", 1));