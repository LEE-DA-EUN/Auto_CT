import sys
input = sys.stdin.readline

N = int(input())
T = []
P = []
ans = 0
for _ in range(N):
    t, p = map(int, input().split())
    T.append(t)
    P.append(p)

def dfs(day, total):
    global ans
    if day >= N:
        ans = max(ans, total)
        return
    if day + T[day] <= N:
        dfs(day + T[day], total + P[day])
        
    dfs(day + 1, total)


dfs(0, 0)
print(ans)
