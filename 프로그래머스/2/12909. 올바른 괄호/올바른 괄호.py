def solution(s):
    answer = True
    ls = list(s)
    stk = []
    for i in ls:
        if i == "(":
            stk.append("(")
        else:
            if not len(stk):
                answer = False
                break
            elif stk[-1] == "(":
                stk.pop()
    if len(stk):
        answer = False
    
    return answer