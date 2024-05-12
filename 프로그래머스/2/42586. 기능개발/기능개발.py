import math
def solution(progresses, speeds):
    answer = []
    release = []
    for i in range(len(progresses)):
        num = math.ceil((100 - progresses[i])/speeds[i])
        release.append(num)

    cnt = 0
    num = release[0]
    for i in range(len(progresses)):
        if release[i] <= num:
            cnt += 1
        else:
            answer.append(cnt)
            cnt = 1
            num = release[i]
    answer.append(cnt)
    return answer