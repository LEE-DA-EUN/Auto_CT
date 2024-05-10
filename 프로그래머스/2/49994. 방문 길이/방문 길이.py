def move(x, y, do): #움직이는 좌표 설정
    if do == 'U':
        nx, ny = x, y+1
    elif do == 'D':
        nx, ny = x, y-1
    elif do == 'L':
        nx, ny = x-1, y
    elif do == 'R':
        nx, ny = x+1, y
    return nx, ny

        
def solution(dirs):
    result = set()
    x = 5
    y = 5
    for do in dirs:
        nx, ny = move(x,y,do)
        if nx < 0 or nx > 10 or ny < 0 or ny > 10: # 좌표 벗어난 것 처리
            continue
        result.add((x, y, nx, ny))
        result.add((nx, ny, x, y))
        x = nx
        y = ny
        ans = len(result)/2
    return ans