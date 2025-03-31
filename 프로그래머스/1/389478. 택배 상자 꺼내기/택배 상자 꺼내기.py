def solution(n, w, num):
    answer = 0
    idx = num-1
    floor = idx//w
    col = 0
    if floor%2 == 0:
        col = idx%w
    else:
        col = w-1-(idx%w)
        
    for i in range(n):
        now_floor = i//w
        if now_floor%2 == 0:
            now_col = i%w
        else:
            now_col = w-1-(i%w)
        if now_col == col and now_floor >= floor:
            answer += 1
            
    return answer