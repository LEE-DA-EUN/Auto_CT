import sys
from wsgiref.validate import header_re

input = sys.stdin.readline
N = int(input())
ls = [list(input().strip()) for _ in range(N)]
ans = [0,0,0,0,0] #왼쪽팔, 오른쪽팔, 허리, 왼쪽다리, 오른쪽다리
cookie = []
for i in range(N):
    for j in range(N):
        if ls[i][j] == '*':
            cookie.append([i+1, j+1])
heart = [cookie[0][0]+1, cookie[0][1]]
print(heart[0], heart[1])
cookie.pop(0)
for x, y in cookie:
    if x == heart[0] and y < heart[1]:
        ans[0] += 1
    elif x == heart[0] and y > heart[1]:
        ans[1] += 1
    elif x > heart[0] and y == heart[1]:
        ans[2] += 1
    elif x > heart[0] and y == heart[1]-1:
        ans[3] += 1
    elif x > heart[0] and y == heart[1]+1:
        ans[4] += 1
print(" ".join(map(str, ans)))


