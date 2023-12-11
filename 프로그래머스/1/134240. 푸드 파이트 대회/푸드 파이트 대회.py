def solution(food):
    answer = []
    test = []
    j = 1
    for i in range(1, len(food)):
        num = food[i]//2
        for n in range(num):
            answer.append(str(j))
            test.append(str(j))
        j += 1
    answer.append(str(0))
    test.reverse()
    answer = answer + test
    answer = ''.join(answer)
    
    return answer