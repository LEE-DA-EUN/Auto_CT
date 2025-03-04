import sys
from itertools import permutations

N, M = map(int, sys.stdin.readline().strip().split())
ls = list(map(int, sys.stdin.readline().strip().split()))
ls.sort()

for i in permutations(ls, M):
    print(*i)
