def solution(x, n):
    answer = []
    num = 0
    while len(answer) < n:
        num += x
        answer.append(num)
    return answer