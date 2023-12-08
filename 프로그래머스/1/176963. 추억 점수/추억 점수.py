def solution(name, yearning, photo):
    answer = []
    for i in range(len(photo)):
        ls = photo[i]
        ans = 0
        for j in range(len(ls)):
            for k in range(len(name)):
                if ls[j] == name[k]:
                    ans += yearning[k]
        answer.append(ans)
    return answer