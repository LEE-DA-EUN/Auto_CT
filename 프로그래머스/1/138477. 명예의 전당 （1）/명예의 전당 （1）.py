def solution(k, score):
    answer = []
    result = []
    for i in range(len(score)):
        if len(result) < k:
            result.append(score[i])
        else:
            if min(result) < score[i]:
                result.remove(min(result))
                result.append(score[i])
        answer.append(min(result))
    return answer