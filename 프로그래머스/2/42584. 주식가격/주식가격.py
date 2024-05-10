def solution(prices):
    answer = [0] * len(prices)
    s = [0]
    for i in range(1, len(prices)):
        while len(s) != 0 and prices[i] < prices[s[-1]]:
            num = s.pop()
            answer[num] = i - num
        s.append(i)
    while s:
        num = s.pop()
        answer[num] = len(prices)-num-1
    return answer