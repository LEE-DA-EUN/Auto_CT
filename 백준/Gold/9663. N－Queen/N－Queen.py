import sys
input = sys.stdin.readline
N = int(input())
row = [0] * N
ans = 0

def check(n):
    for i in range(n):
        if row[n] == row[i] or abs(row[n] - row[i]) == (n - i):
            return False
    return True


def dfs(n):
    global ans
    if n == N:
        ans += 1
        return
    else:
        for i in range(N):
            row[n] = i
            if check(n):
                dfs(n + 1)


dfs(0)
print(ans)