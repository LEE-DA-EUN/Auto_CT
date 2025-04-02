import sys
input = sys.stdin.readline
N = int(input())
K = int(input())
ls = list(map(int, input().split()))

if N <= K:
    ans = 0
else:
    ls.sort()
    distances = []
    for i in range(N - 1):
        tmp = ls[i + 1] - ls[i]
        distances.append(tmp)
    distances.sort(reverse=True)
    ans = sum(distances[K-1:])
print(ans)