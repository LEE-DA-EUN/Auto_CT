def solution(s):
    answer = 1
    ls = list(s)
    stk = [ls[0]]
    for i in range(1, len(ls)):
        if len(stk):
            if ls[i] == stk[-1]:
                stk.pop()
            else:
                stk.append(ls[i])
        else:
            stk.append(ls[i])
                
    if len(stk):
        answer = 0

    return answer