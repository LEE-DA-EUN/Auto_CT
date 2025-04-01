from collections import deque
import sys
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    w, h = map(int, input().split())
    building = [list(input().strip()) for _ in range(h)]
    fire_time = [[-1] * w for _ in range(h)]
    visited = [[False] * w for _ in range(h)]
    dy = [-1, 1, 0, 0]
    dx = [0, 0, -1, 1]
    fire = deque()
    person = deque()

    for y in range(h):
        for x in range(w):
            if building[y][x] == '*':
                fire.append((y, x))
                fire_time[y][x] = 0
            elif building[y][x] == '@':
                person.append((y, x, 0))
                visited[y][x] = True

    while fire:
        y, x = fire.popleft()
        for d in range(4):
            ny = y + dy[d]
            nx = x + dx[d]
            if 0 <= ny < h and 0 <= nx < w:
                if building[ny][nx] == '.' and fire_time[ny][nx] == -1:
                    fire_time[ny][nx] = fire_time[y][x] + 1
                    fire.append((ny, nx))

    escaped = False
    while person:
        y, x, t = person.popleft()
        for d in range(4):
            ny = y + dy[d]
            nx = x + dx[d]
            if not (0 <= ny < h and 0 <= nx < w):
                print(t + 1)
                escaped = True
                break
            if building[ny][nx] != '.' or visited[ny][nx]:
                continue
            if fire_time[ny][nx] != -1 and fire_time[ny][nx] <= t + 1:
                continue
            visited[ny][nx] = True
            person.append((ny, nx, t + 1))
        if escaped:
            break

    if not escaped:
        print("IMPOSSIBLE")
