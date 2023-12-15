def solution(answers):
    answer = []
    tmp = []
    p1 = [1,2,3,4,5]
    p2 = [2,1,2,3,2,4,2,5]
    p3 = [3,3,1,1,2,2,4,4,5,5]
    loops = [p1, p2, p3]
    for i in loops:
        n = 0
        for j in range(1, len(answers)+1):
            num = j % len(i) - 1
            if num == -1:
                num = len(i) - 1
            if answers[j-1] == i[num]:
                n += 1
        tmp.append(n)
    
    for i in range(3):
        if tmp[i] == max(tmp):
            answer.append(i+1)
        
    return answer