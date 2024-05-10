def solution(N, stages):
    answer = {}
    stop = [0] * (N+1)
    for i in range(len(stages)):
        stop[stages[i]-1] += 1
        
    for i in range(len(stop)-1):
        if stop[i] == 0:
            answer[i+1] = 0
            continue
        ans = stop[i] / sum(stop)
        stop[i] = 0
        answer[i+1] = ans
    result = sorted(answer, key = lambda x : answer[x], reverse=True)
    return result
    