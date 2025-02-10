import sys
import heapq

input = sys.stdin.read
ls = list(map(int, input().split()))
n = ls[0]
cmd = ls[1:]

heap = []
ans = []

for x in cmd:
    if x == 0:
        if heap:
            ans.append(heapq.heappop(heap))
        else:
            ans.append(0)
    else:
        heapq.heappush(heap, x)

print("\n".join(map(str, ans)))
