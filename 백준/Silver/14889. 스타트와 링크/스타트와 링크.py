from itertools import combinations
import sys

input = sys.stdin.readline
N = int(input())
ls = [list(map(int, input().split()) ) for _ in range(N)]

visited = [False] * N
ans = 10**9

def backtrack(depth, idx):
    global ans

    if depth == N//2:
        S_team, L_team = [], []
        for i in range(N):
            if visited[i]:
                S_team.append(i)
            else:
                L_team.append(i)

        S = sum(ls[i][j] for i in S_team for j in S_team)
        L = sum(ls[i][j] for i in L_team for j in L_team)
        ans = min(ans, abs(S - L))
        return


    for i in range(idx,N):
        visited[i] = True
        backtrack(depth + 1, i+1)
        visited[i] = False


backtrack(0, 0)
print(ans)