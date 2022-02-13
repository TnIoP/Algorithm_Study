function solution(a, b) {
    var answer = '';
    let day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    answer = day[new Date('2016-' + a + '-' + b).getDay()];
    return answer;
}
