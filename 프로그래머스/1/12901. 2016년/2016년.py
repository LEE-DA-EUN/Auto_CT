def solution(a, b): #1월 1일은 금요일
    ans = b
    check = {0:'THU', 1:'FRI', 2:'SAT', 3:'SUN', 4:'MON', 5:'TUE', 6:'WED'}
    d30 = [4,6,9,11]
    for i in range(1, a):
        if i in d30:
            ans += 30
        elif i == 2:
            ans += 29
        else:
            ans += 31
    answer = check[ans%7]
    return answer