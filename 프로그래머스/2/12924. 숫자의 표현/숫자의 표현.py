def solution(n):
    answer = 1
    for i in range(n//2+1,0,-1):
        ans = i
        for j in range(i-1,0,-1):
            ans += j
            if ans == n:
                answer += 1
            elif ans > n:
                break
            else:
                continue
            
    return answer