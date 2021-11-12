function solution(numbers, hand) {
    var answer = '';
    let left = { x: -1, y: 0 }; // *
    let right = { x: 1, y: 0 }; // #

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] == 1 || numbers[i] == 4 || numbers[i] == 7) { // 1, 4, 7 => left
            if (numbers[i] == 1) left = { x: -1, y: 3 };
            else if (numbers[i] == 4) left = { x: -1, y: 2 };
            else left = { x: -1, y: 1 };
            answer += 'L';
        }
        else if (numbers[i] == 3 || numbers[i] == 6 || numbers[i] == 9) { // 3, 6, 9 => right
            if (numbers[i] == 3) right = { x: 1, y: 3 };
            else if (numbers[i] == 6) right = { x: 1, y: 2 };
            else right = { x: 1, y: 1 };
            answer += 'R';
        }
        else { // 2, 5, 8, 0
            if (numbers[i] == 2) { // 2
                if (getDistance({ x: 0, y: 3 }, left) < getDistance({ x: 0, y: 3 }, right)) {
                    left = { x: 0, y: 3 };
                    answer += 'L';
                }
                else if (getDistance({ x: 0, y: 3 }, left) > getDistance({ x: 0, y: 3 }, right)) {
                    right = { x: 0, y: 3 };
                    answer += 'R';
                }
                else { // 거리가 같을 경우
                    if (hand == "left") { // 왼손잡이 
                        left = { x: 0, y: 3 };
                        answer += 'L';
                    }
                    else { // 오른손잡이
                        right = { x: 0, y: 3 };
                        answer += 'R';
                    }
                }
            }
            else if (numbers[i] == 5) { // 5
                if (getDistance({ x: 0, y: 2 }, left) < getDistance({ x: 0, y: 2 }, right)) {
                    left = { x: 0, y: 2 };
                    answer += 'L';
                }
                else if (getDistance({ x: 0, y: 2 }, left) > getDistance({ x: 0, y: 2 }, right)) {
                    right = { x: 0, y: 2 };
                    answer += 'R';
                }
                else { // 거리가 같을 경우
                    if (hand == "left") { // 왼손잡이
                        left = { x: 0, y: 2 };
                        answer += 'L';
                    }
                    else { // 오른손잡이
                        right = { x: 0, y: 2 };
                        answer += 'R';
                    }
                }
            }
            else if (numbers[i] == 8) { // 8
                if (getDistance({ x: 0, y: 1 }, left) < getDistance({ x: 0, y: 1 }, right)) {
                    left = { x: 0, y: 1 };
                    answer += 'L';
                }
                else if (getDistance({ x: 0, y: 1 }, left) > getDistance({ x: 0, y: 1 }, right)) {
                    right = { x: 0, y: 1 };
                    answer += 'R';
                }
                else { // 거리가 같을 경우
                    if (hand == "left") { // 왼손잡이
                        left = { x: 0, y: 1 };
                        answer += 'L';
                    }
                    else { // 오른손잡이
                        right = { x: 0, y: 1 };
                        answer += 'R';
                    }
                }
            }
            else { // 0
                if (getDistance({ x: 0, y: 0 }, left) < getDistance({ x: 0, y: 0 }, right)) {
                    left = { x: 0, y: 0 };
                    answer += 'L';
                }
                else if (getDistance({ x: 0, y: 0 }, left) > getDistance({ x: 0, y: 0 }, right)) {
                    right = { x: 0, y: 0 };
                    answer += 'R';
                }
                else { // 거리가 같을 경우
                    if (hand == "left") { // 왼손잡이
                        left = { x: 0, y: 0 };
                        answer += 'L';
                    }
                    else { // 오른손잡이
                        right = { x: 0, y: 0 };
                        answer += 'R';
                    }
                }
            }
        }
    }
    return answer;
}

function getDistance(coord1, coord2) { // 좌표와 좌표 거리 구하기
    return Math.abs(coord1.x - coord2.x) + Math.abs(coord1.y - coord2.y);
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
