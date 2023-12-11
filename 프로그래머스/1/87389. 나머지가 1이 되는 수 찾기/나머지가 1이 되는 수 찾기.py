def solution(n):
    answer = n-1
    for i in range(2, answer):
        if answer % i == 0:
            answer = i
    return answer