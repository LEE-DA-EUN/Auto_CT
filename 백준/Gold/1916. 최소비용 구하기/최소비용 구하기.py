import sys
import heapq
input = sys.stdin.readline
N = int(input())
M = int(input())
ls = [list(map(int, input().split())) for _ in range(M)]
start, end = map(int, input().split())

# 인접리스트 생성
adj = [[] for _ in range(N+1)]
for u,v,w in ls:
    adj[u].append((w,v))

def dijkstra(start):
    INF = float('inf') #무한대 값을 저장
    dist = [INF for _ in range(N+1)]
    dist[start] = 0 #시작 비용은 0
    q = [(0, start)]
    while q:
        cost, now = heapq.heappop(q)
        if dist[now] < cost: #이미 최소비용 처리된 도시면 continue
            continue
        for new_cost, next_node in adj[now]:
            total = cost + new_cost
            if total < dist[next_node]: # 더 작은 비용이면 업데이트
                dist[next_node] = total
                heapq.heappush(q, (total, next_node))
    return dist
ans = dijkstra(start)
print(ans[end])