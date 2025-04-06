def solution(survey, choices):
    answer = ''
    scores = {'R': 0, 'T': 0,'C': 0, 'F': 0,'J': 0, 'M': 0,'A': 0, 'N': 0}

    for i in range(len(survey)):
        a, b = survey[i]
        choice = choices[i]

        if choice < 4:
            scores[a] += 4 - choice
        elif choice > 4:
            scores[b] += choice - 4

    
    tmp = [('R', 'T'), ('C', 'F'), ('J', 'M'), ('A', 'N')]
    for x, y in tmp:
        if scores[x] >= scores[y]:
            answer += x
        else:
            answer += y

    return answer
