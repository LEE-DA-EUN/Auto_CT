def solution(id_list, report, k):
    answer = []
    report = set(report) #한 유저가 같은 유저를 여러번 신고할 수 없음
    checklist = {}
    ans = {}
    
    for i in id_list:
        checklist[i] = [] #신고한 유저를 확인할 신고리스트
        ans[i] = 0 #받은 메일 수를 세기 위한 리스트
    
    for i in report:
        ls = list(map(str, i.split()))
        p1 = ls[0] #신고한 유저
        p2 = ls[1] #신고 당한 유저
        checklist[p2].append(p1)
        
    for i in checklist:
        if len(checklist[i]) >= k: #신고리스트를 확인해서 k보다 신고를 많이 당했으면
            for j in checklist[i]: #신고한 유저들이 메일을 하나 받게됨
                ans[j] += 1
                
    for i in ans.values():
        answer.append(i)
    return answer