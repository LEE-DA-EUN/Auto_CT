import sys
import math
input = sys.stdin.readline
N = int(input())
M = int(input())
ls = list(map(int, input().split()))
dist = [ls[0], N-ls[-1]]
for i in range(1, len(ls)):
    num = math.ceil((ls[i] - ls[i - 1]) / 2)
    dist.append(num)
print(max(dist))