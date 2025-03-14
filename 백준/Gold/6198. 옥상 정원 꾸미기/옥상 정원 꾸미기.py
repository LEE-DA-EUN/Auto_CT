import sys
input = sys.stdin.readline
N = int(input())
ls = [int(input()) for _ in range(N)]
stack = []
ans = 0

for i in ls:
    while stack and i >= stack[-1]:
        stack.pop()
    ans += len(stack)
    stack.append(i)

print(ans)
