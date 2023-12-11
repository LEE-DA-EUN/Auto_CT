def solution(t, p):
    answer = 0    
    ls = list(map(int, t))
    for i in range(len(ls)-len(p)+1):
        num = ''
        for j in range(i, i+len(p)):
            num += str(ls[j])
        if int(num) <= int(p):
            answer += 1
    return answer