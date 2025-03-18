import sys
input = sys.stdin.readline
M, N = map(int, input().split())

ls = [True] * (N+1)
ls[0] = False
ls[1] = False

for i in range(2, int(N**0.5)+1):
    if ls[i]:
        for j in range(i*i, N+1,i):
            ls[j] = False

for i in range(M, N+1):
    if ls[i]:
        print(i)