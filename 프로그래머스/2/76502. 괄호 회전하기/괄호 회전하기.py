def solution(s):
    dic = {'[':1, '{':2, '(':3, ']':4, '}':5, ')':6}
    answer = 0
    ls = list(s)
    for _ in range(len(s)):
        check = [] #올바른 괄호들을 확인하기 위한 배열
        for i in range(len(ls)):
            num = dic[ls[i]]
            if len(check) > 0:
                if check[-1] == num -3 :
                    check.pop()
                else:
                    check.append(num)
            else:
                check.append(num)
                    
        
        if len(check) == 0:
            answer += 1            
        ls.append(ls.pop(0)) #괄호 회전하기
        
    return answer