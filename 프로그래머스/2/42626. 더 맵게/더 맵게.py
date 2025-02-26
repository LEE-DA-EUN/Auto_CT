import heapq
def solution(scoville, K):
    answer = 0
    heapq.heapify(scoville)
    
    while len(scoville) > 1 and scoville[0] < K:
        num1, num2 = heapq.heappop(scoville), heapq.heappop(scoville)
        tmp = num1+(num2*2)
        heapq.heappush(scoville,tmp)
        answer += 1
    
    if scoville[0] < K:
        answer = -1
    return answer