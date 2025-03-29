def solution(participant, completion):
    answer = ''
    participant.sort()
    completion.sort()
    
    for i, j in zip(participant, completion):
        if i != j:
            answer = i
            return answer
    
    answer = participant[-1]
    return answer
