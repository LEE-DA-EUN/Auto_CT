N, M, x, y, K = map(int, input().split())
ls = [list(map(int, input().split())) for _ in range(N)]
cmd = list(map(int, input().split()))
dice = [0] * 6
dx = [0, 0, 0, -1, 1]
dy = [0, 1, -1, 0, 0]

def roll(dir):
    if dir == 1:
        dice[0], dice[1], dice[4], dice[5] = dice[4], dice[5], dice[1], dice[0]
    elif dir == 2:
        dice[0], dice[1], dice[4], dice[5] = dice[5], dice[4], dice[0], dice[1]
    elif dir == 3:
        dice[0], dice[1], dice[2], dice[3] = dice[3], dice[2], dice[0], dice[1]
    elif dir == 4:
        dice[0], dice[1], dice[2], dice[3] = dice[2], dice[3], dice[1], dice[0]

for i in cmd:
    nx, ny = x + dx[i], y + dy[i]

    if not (0 <= nx < N and 0 <= ny < M):
        continue

    roll(i)

    if ls[nx][ny] == 0:
        ls[nx][ny] = dice[1]
    else:
        dice[1] = ls[nx][ny]
        ls[nx][ny] = 0

    x, y = nx, ny
    print(dice[0])
