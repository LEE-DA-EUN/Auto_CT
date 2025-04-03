import sys
input = sys.stdin.readline

N = int(input())
ls = []
for i in range(N):
    ls.append(int(input()))
ls.sort()

ans = 0
for i in range(N):
    tmp = ls[i] * (N-i)
    ans = max(ans, tmp)
print(ans)