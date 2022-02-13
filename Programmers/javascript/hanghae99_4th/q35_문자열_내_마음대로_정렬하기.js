function solution(strings, n) {
    var answer = strings.sort(function (a, b) {
        if (a[n] > b[n]) return 1;
        if (a[n] < b[n]) return -1;
        if (a[n] === b[n]) {
            // n번째 인덱스 글자가 같을 경우 사전식 정렬
            if (a > b) return 1;
            if (a < b) return -1;
        }
    });
    return answer;
}

console.log(solution(['sun', 'bed', 'car'], 2));
