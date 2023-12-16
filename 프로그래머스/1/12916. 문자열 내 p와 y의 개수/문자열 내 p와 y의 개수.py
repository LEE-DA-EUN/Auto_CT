def solution(s):
    answer = True
    ls = list(s.upper())
    if ls.count('P') != ls.count('Y'):
        answer = False

    return answer