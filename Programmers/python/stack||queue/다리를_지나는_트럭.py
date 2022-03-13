def solution(bridge_length, weight, truck_weights):
    answer = 0
    on_truck = [0] * bridge_length
    while on_truck != []:
        answer += 1
        on_truck.pop(0)
        if truck_weights:
            if sum(on_truck) + truck_weights[0] <= weight:
                on_truck.append(truck_weights.pop(0))
            else:
                on_truck.append(0)
    return answer
