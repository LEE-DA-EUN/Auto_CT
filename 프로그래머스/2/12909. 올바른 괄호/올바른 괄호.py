def solution(s):
    answer = True
    stk = []
    for i in s:
        if i == "(":
            stk.append("(")
        else:
            if not stk:
                answer = False
                break
            stk.pop()
    if stk:
        answer = False
        
    return answer