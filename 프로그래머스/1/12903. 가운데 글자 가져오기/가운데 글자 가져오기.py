def solution(s):
    answer = ''
    ls = list(s)
    num = len(ls) // 2
    if len(s) < 3:
        answer = s
    elif len(ls) % 2 == 0:
        answer = ls[num-1] + ls[num]
    else:
        answer = ls[num]
    return answer