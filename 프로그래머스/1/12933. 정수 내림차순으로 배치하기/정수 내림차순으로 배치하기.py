def solution(n):
    ls = list(map(int, str(n)))
    ls.sort(reverse = True)
    answer = ''.join(map(str, ls))
    return int(answer)