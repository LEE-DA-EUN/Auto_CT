def solution(numbers):
    answer = []
    tmp = []
    for i in range(len(numbers)-1):
        for j in range(i+1, len(numbers)):
            num = numbers[i] + numbers[j]
            tmp.append(num)
    answer = list(set(tmp))
    answer.sort()
    return answer