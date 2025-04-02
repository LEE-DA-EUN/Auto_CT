import sys
input = sys.stdin.readline
doc = input().strip()
find = input().strip()
ans = 0
i = 0
while i <= len(doc)-len(find):
    if doc[i:i+len(find)] == find:
        ans += 1
        i += len(find)
    else:
        i += 1
print(ans)