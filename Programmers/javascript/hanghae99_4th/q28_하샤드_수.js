function solution(x) {
    let sum = 0;
    let temp = x.toString().split('');
    for (var i = 0; i < temp.length; i++) sum += Number(temp[i]);
    return x % sum == 0 ? true : false;
}
