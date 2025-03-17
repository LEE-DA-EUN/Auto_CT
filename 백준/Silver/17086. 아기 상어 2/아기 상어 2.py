import sys
from collections import deque
input = sys.stdin.readline
N, M = map(int, input().split())
ls = [list(map(int, input().split())) for _ in range(N)]
dx = [-1, -1, -1, 0, 0, 1, 1, 1]
dy = [-1, 0, 1, -1, 1, -1, 0, 1]
q = deque()
ans = 0
for i in range(N):
    for j in range(M):
        if ls[i][j] == 1:
            q.append((i, j, 0))

while q:
    x,y,tmp = q.popleft()
    for d in range(8):
        nx = x + dx[d]
        ny = y + dy[d]
        if nx < 0 or nx >= N or ny < 0 or ny >= M:
            continue
        if ls[nx][ny]:
            continue
        ls[nx][ny] = tmp + 1
        ans = max(ans, ls[nx][ny])
        q.append((nx, ny, tmp + 1))
print(ans)