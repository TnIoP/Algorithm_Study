def solution(numbers, hand):
    answer = ''
    left = [-1, 0]
    right = [1, 0]

    for i in range(len(numbers)):
        if numbers[i] == 1 or numbers[i] == 4 or numbers[i] == 7:
            if numbers[i] == 1:
                left = [-1, 3]
            elif numbers[i] == 4:
                left = [-1, 2]
            else:
                left = [-1, 1]
            answer += 'L'
        elif numbers[i] == 3 or numbers[i] == 6 or numbers[i] == 9:
            if numbers[i] == 3:
                right = [1, 3]
            elif numbers[i] == 6:
                right = [1, 2]
            else:
                right = [1, 1]
            answer += 'R'
        else:
            if numbers[i] == 2:
                if get_distance([0, 3], left) < get_distance([0, 3], right):
                    left = [0, 3]
                    answer += 'L'
                elif get_distance([0, 3], left) > get_distance([0, 3], right):
                    right = [0, 3]
                    answer += 'R'
                else:
                    if hand == "left":
                        left = [0, 3]
                        answer += 'L'
                    else:
                        right = [0, 3]
                        answer += 'R'
            elif numbers[i] == 5:
                if get_distance([0, 2], left) < get_distance([0, 2], right):
                    left = [0, 2]
                    answer += 'L'
                elif get_distance([0, 2], left) > get_distance([0, 2], right):
                    right = [0, 2]
                    answer += 'R'
                else:
                    if hand == "left":
                        left = [0, 2]
                        answer += 'L'
                    else:
                        right = [0, 2]
                        answer += 'R'
            elif numbers[i] == 8:
                if get_distance([0, 1], left) < get_distance([0, 1], right):
                    left = [0, 1]
                    answer += 'L'
                elif get_distance([0, 1], left) > get_distance([0, 1], right):
                    right = [0, 1]
                    answer += 'R'
                else:
                    if hand == "left":
                        left = [0, 1]
                        answer += 'L'
                    else:
                        right = [0, 1]
                        answer += 'R'
            else:
                if get_distance([0, 0], left) < get_distance([0, 0], right):
                    left = [0, 0]
                    answer += 'L'
                elif get_distance([0, 0], left) > get_distance([0, 0], right):
                    right = [0, 0]
                    answer += 'R'
                else:
                    if hand == "left":
                        left = [0, 0]
                        answer += 'L'
                    else:
                        right = [0, 0]
                        answer += 'R'
    return answer


def get_distance(coord1, coord2):
    return abs(coord1[0] - coord2[0]) + abs(coord1[1] - coord2[1])
