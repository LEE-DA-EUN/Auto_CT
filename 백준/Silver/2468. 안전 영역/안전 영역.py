import sys
sys.setrecursionlimit(10 ** 6)

dx = [0, -1, 0, 1]
dy = [1, 0, -1, 0]

def dfs(x, y, h):
    for d in range(4):
        nx = x + dx[d]
        ny = y + dy[d]
        if nx < 0 or nx >= n or ny < 0 or ny >= n:
            continue
        if ls[nx][ny] <= h or visited[nx][ny] == True:
            continue
        visited[nx][ny] = True
        dfs(nx, ny, h)

n = int(input())
ls = []
for _ in range(n):
    ls.append(list(map(int, input().split())))

ans = 1
max_num = max(map(max, ls))
for h in range(max_num):
    step = 0
    visited = [[False for j in range(n)] for i in range(n)]
    for i in range(n):
        for j in range(n):
            if ls[i][j] <= h or visited[i][j]:
                continue
            step += 1
            visited[i][j] = True
            dfs(i, j, h)
    ans = max(ans, step)
print(ans)