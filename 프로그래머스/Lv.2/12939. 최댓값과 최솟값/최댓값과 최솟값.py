def solution(s):
    answer = ''
    ls = list(map(int, s.split()))
    ls.sort()
    answer += str(ls[0]) + ' '
    answer += str(ls[len(ls)-1])
    
    return answer