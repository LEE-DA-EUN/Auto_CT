def solution(cards1, cards2, goal):
    answer = 'Yes'
    for i in goal:
        if i in cards1:
            if i == cards1[0]:
                cards1.pop(0)
            else:
                answer = 'No'
                break
        elif i in cards2:
            if i == cards2[0]:
                cards2.pop(0)
            else:
                answer = 'No'
                break
    return answer