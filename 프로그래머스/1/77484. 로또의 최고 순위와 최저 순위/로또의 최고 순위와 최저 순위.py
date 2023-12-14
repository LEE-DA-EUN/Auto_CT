def solution(lottos, win_nums):
    answer = []
    num = 0 # 못 맞춘 갯수 0은 제외됨
    zero_num = 0 #0의 갯수
    for i in lottos:
        if i not in win_nums:
            if i == 0:
                zero_num += 1
            else:
                num += 1
    if num+1 > 6:
        answer.append(6)
    else:
        answer.append(num+1)
    num2 = num + zero_num + 1 #못 맞춘 갯수 + 0의 갯수 (0을 다 못 맞췄다고 가정함) 순위표시 하려면 + 1
    if num2 > 6:
        answer.append(6)
    else:
        answer.append(num2)
    return answer