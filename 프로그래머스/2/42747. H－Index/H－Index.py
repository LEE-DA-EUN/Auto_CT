def solution(citations):
    ans = len(citations)
    citations.sort(reverse=True)  
    for i in range(len(citations)):
        if i + 1 > citations[i]:  
            ans = i
            break
    return ans
