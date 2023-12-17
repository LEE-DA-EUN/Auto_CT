def solution(x):
    answer = True
    ls = list(map(int, str(x)))
    num = sum(ls)
    if x%num != 0:
        answer = False
    return answer