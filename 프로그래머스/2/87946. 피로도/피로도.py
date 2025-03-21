from itertools import permutations

def solution(k, dungeons):
    answer = -1
    for i in permutations(dungeons):
        tmp = k
        cnt = 0
        for start, end in i:
            if tmp < start:
                break
            else:
                tmp -= end
                cnt += 1
        answer = max(answer, cnt)
    return answer