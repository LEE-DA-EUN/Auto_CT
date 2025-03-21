def solution(n, wires):
    answer = n
    for i in range(n-1):
        tmp = wires.copy()
        tmp.pop(i)
        
        graph = [[] for _ in range(n + 1)]
        for a, b in tmp:
            graph[a].append(b)
            graph[b].append(a)
        visited = [False]*(n+1)
        q = [1]
        visited[1] = True
        cnt = 1
        while q:
            now = q.pop(0)
            for d in graph[now]:
                if visited[d]: continue
                visited[d] = True
                q.append(d)
                cnt += 1
        tmp = abs(cnt-(n-cnt))
        answer = min(tmp, answer)
        
        
    return answer