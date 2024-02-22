def solution(k, tangerine):
    answer = 0
    dic = {}
    for i in tangerine:
        if i in dic:
            dic[i] += 1
        else:
            dic[i] = 1
    dic = sorted(dic.items(), key = lambda x : x[1], reverse = True)
    for key, v in dic:
        if k <= 0:
            break
        else:
            k -= v
            answer += 1        
    return answer