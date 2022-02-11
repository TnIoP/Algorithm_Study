function solution(N, stages) {
    let answer = [];
    let tempArr = new Array(N);
    for (
        var i = 0;
        i < tempArr.length;
        i++ // 실패율 순위 비교를 위한 이차원 배열 선언
    )
        tempArr[i] = new Array(2);
    for (let i = 0; i < N; i++) {
        tempArr[i][0] = i + 1; // 인덱스
        tempArr[i][1] = getFailRate(i + 1, stages); // 실패율
    }
    tempArr.sort(function (a, b) {
        // 내림차순 정렬
        return b[1] - a[1];
    });
    for (
        let i = 0;
        i < tempArr.length;
        i++ // 정렬된 순위 추출
    )
        answer[i] = tempArr[i][0];
    return answer;
}

function getFailRate(N, stages) {
    // 실패율 계산
    let failCount = 0;
    let allCount = 0;
    for (let i = 0; i < stages.length; i++) {
        if (stages[i] == N) failCount++;
        if (stages[i] >= N) allCount++;
    }
    return failCount / allCount;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
