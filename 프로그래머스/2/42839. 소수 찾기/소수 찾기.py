from itertools import permutations

def solution(numbers):
    answer = 0
    ls = set()
    
    for i in range(1, len(numbers) + 1):
        for j in permutations(numbers, i):
            num = int("".join(j))
            ls.add(num)

    for i in ls:
        if i < 2:
            continue
        for j in range(2, int(i**0.5) + 1):
            if i % j == 0:
                break
        else:
            answer += 1

    return answer
