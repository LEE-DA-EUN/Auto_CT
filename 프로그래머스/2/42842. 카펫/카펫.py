def solution(brown, yellow):
    answer = []
    total = brown + yellow
    for i in range(1, total):
        if total%i == 0:
            j = total//i
            num = (i+j)*2-4
            if num == brown:
                answer = [j,i]
                break
            
    return answer