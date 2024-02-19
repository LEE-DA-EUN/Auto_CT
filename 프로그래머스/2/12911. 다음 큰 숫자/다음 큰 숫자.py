def count_1(n):
    num = format(n, 'b')
    ls = list(map(int, num))
    cnt = ls.count(1)
    return cnt

def solution(n):
    answer = 0
    cnt = count_1(n)
    while True:
        n += 1
        cnt2 = count_1(n)
        if cnt == cnt2:
            answer = n
            break
        
    return answer