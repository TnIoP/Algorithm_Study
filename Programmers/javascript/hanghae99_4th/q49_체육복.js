function solution(n, lost, reserve) {
    var answer = 0;
    let studentInfo = [];
    for (
        let i = 0;
        i < n;
        i++ // 체육복유무 확인을 위한 배열 초기화
    )
        studentInfo[i] = 1;
    for (
        let i = 0;
        i < lost.length;
        i++ // 체육복없으면 --
    )
        studentInfo[lost[i] - 1]--;
    for (
        let i = 0;
        i < reserve.length;
        i++ // 여벌있으면 ++
    )
        studentInfo[reserve[i] - 1]++;
    for (let i = 0; i < studentInfo.length; i++) {
        if (studentInfo[i] == 0) {
            // 체육복이 없으면
            if (studentInfo[i - 1] == 2) {
                // 이웃번호에게 빌린다
                studentInfo[i - 1]--;
                studentInfo[i]++;
            } else if (studentInfo[i + 1] == 2) {
                studentInfo[i + 1]--;
                studentInfo[i]++;
            }
        }
        if (studentInfo[i] != 0) answer++;
    }
    return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
