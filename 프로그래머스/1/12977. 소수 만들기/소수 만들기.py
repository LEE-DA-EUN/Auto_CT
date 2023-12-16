from itertools import combinations
import math
def solution(nums):
    answer = 0
    for i in combinations(nums, 3): # 수 3개를 뽑는다
        num = sum(list(i))
        ans = True
        for j in range(2, int(math.sqrt(num)+1)): #제곱근까지만 확인하면 소수를 찾을 수 있다
            if num % j == 0:
                ans = False
        if ans:
            answer += 1
    return answer