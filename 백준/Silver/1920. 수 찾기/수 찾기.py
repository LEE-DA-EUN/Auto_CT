n = int(input())
ans = set(map(int, input().split()))
m = int(input())
check = list(map(int, input().split()))
for i in check:
    if i in ans:
        print(1)
    else:
        print(0)