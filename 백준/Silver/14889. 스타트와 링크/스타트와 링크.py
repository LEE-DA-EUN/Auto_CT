from itertools import combinations
import sys

input = sys.stdin.readline
N = int(input())
ls = [list(map(int, input().split()) ) for _ in range(N)]

players = [i for i in range(N)]
ans = 10**9

for S_team in combinations(players, N//2):
    L_team = list(set(players) - set(S_team))
    S = sum(ls[i][j] for i in S_team for j in S_team)
    L = sum(ls[i][j] for i in L_team for j in L_team)

    ans = min(ans, abs(S-L))
print(ans)