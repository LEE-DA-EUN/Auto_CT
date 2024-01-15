def solution(s):
    answer = True
    ls = list(s)
    stk = []
    if ls[0] == ')':
        answer = False
    else:
        stk.append(ls[0])
        for i in range(1, len(ls)):
            if ls[i] == '(':
                stk.append(ls[i])
            elif ls[i] == ')':
                if len(stk):
                    stk.pop()
                else:
                    answer = False
                    break
    if len(stk):
        answer = False
    
    return answer