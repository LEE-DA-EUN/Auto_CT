def solution(s):
    answer = []    
    s = s.split(' ')
    for i in s:
        tmp = ''
        for j in range(len(i)):
            if j%2 == 0:
                tmp += i[j].upper()
            else:
                tmp += i[j].lower()
        answer.append(tmp)   
    return ' '.join(answer)