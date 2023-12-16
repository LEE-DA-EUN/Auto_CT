def solution(d, budget):
    answer = 0
    num = 0
    d.sort()
    for i in d:
        num += i
        if num <= budget:          
            answer += 1
        else:
            break
    return answer