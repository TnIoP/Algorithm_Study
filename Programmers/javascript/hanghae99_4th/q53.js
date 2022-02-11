function solution(dartResult) {
    var answer = 0;
    let temp = dartResult.split('');
    let pointer = 0;
    let score = [];
    let bonus = [];
    let option = [];

    for (let i = 0; i < temp.length; i++) {
        if (temp[i] == 'S' || temp[i] == 'D' || temp[i] == 'T') {
            // 보너스는 무조건 한글자로 정해지기 때문에 보너스를 기준으로 나눈다
            if (temp[i - 1] == '0') {
                // 점수가 0인지 10인지 확인
                if (i == 1)
                    // 첫번째 점수가 0일 때 (배열초과방지)
                    score[pointer] = 0;
                else if (temp[i - 2] == '1')
                    // 10점
                    score[pointer] = 10;
                // 0점
                else score[pointer] = 0;
            } // 0점이나 10점 아닌 경우
            else score[pointer] = temp[i - 1];

            bonus[pointer] = temp[i]; // 보너스

            if (pointer == 2 && i == temp.length)
                // 옵션 (배열초과방지)
                option[pointer] = '0';
            // 마지막 다트 옵션이 없을 경우 임의의 값 0 지정 (의미없음)
            else option[pointer] = temp[i + 1]; // 어차피 *와 #만 조건문으로 거를 것이기 때문에 다른게 들어가도 상관없음
            pointer++;
        }
    }

    for (let i = 0; i < score.length; i++) {
        // 보너스, 옵션 점수에 반영
        score[i] = Number(score[i]); // 점수 숫자취급
        if (bonus[i] == 'D')
            // 보너스 ^2
            score[i] = Math.pow(score[i], 2);
        else if (bonus[i] == 'T')
            // 보너스 ^3
            score[i] = Math.pow(score[i], 3);

        if (option[i] == '#')
            // 아차상이면 음수로
            score[i] *= -1;

        if (option[i] == '*') {
            // 스타상 계산
            if (i == 0)
                // 첫번째 다트가 스타상이면 첫번째 점수만 두배
                score[i] *= 2;
            else {
                score[i - 1] *= 2;
                score[i] *= 2;
            }
        }
    }
    for (
        let i = 0;
        i < score.length;
        i++ // 점수 합산
    )
        answer += score[i];
    return answer;
}

console.log(solution('0S*10S*10S*'));
