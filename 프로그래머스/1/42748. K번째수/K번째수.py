def solution(array, commands):
    answer = []
    for i, j, k in commands:
        tmp = []
        for n in range(i-1, j):
            tmp.append(array[n])
        tmp.sort()
        answer.append(tmp[k-1])
    return answer