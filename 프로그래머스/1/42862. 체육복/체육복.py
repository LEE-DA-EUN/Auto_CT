def solution(n, lost, reserve):
    losts = set(lost)-set(reserve)
    reserves = set(reserve)-set(lost)

    for i in sorted(reserves):
        if i-1 in losts:
            losts.remove(i-1)
        elif i+1 in losts:
            losts.remove(i+1)

    answer = n-len(losts)
    return answer
