def solution(n, k, cmd):
    answer = ['O'] * n
    s = [] # 삭제 된 행을 저장할 스택
    up = [i-1 for i in range(n+2)]
    down = [i+1 for i in range(n+1)]
    k += 1 #현재 인덱스
    
    for i in cmd:
        if i.startswith('C'): #삭제
            s.append(k)
            up[down[k]] = up[k]
            down[up[k]] = down[k]
            if n < down[k]:
                k = up[k]
            else:
                k = down[k]
                
        elif i.startswith('Z'): #복구
            tmp = s.pop() #최근 것 부터 복구
            down[up[tmp]] = tmp
            up[down[tmp]] = tmp
            
        else: #위치이동
            do, num = i.split()
            if do == 'U':
                for j in range(int(num)):
                    k = up[k]
            elif do == 'D':
                for j in range(int(num)):
                    k = down[k]
            
    for i in s:
        answer[i-1] = 'X'
    
    return ''.join(answer)