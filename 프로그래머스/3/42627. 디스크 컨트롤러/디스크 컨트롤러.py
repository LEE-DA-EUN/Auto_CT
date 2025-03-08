import heapq

def solution(jobs):
    jobs.sort()
    heap = []
    time, total, i = 0, 0, 0
    n = len(jobs)

    while i < n or heap:
        while i < n and jobs[i][0] <= time:
            heapq.heappush(heap, (jobs[i][1], jobs[i][0]))
            i += 1
        
        if heap:
            j_time, r_time = heapq.heappop(heap)
            time += j_time
            total += time - r_time
        else:
            time = jobs[i][0]

    ans = total // n
    return ans
