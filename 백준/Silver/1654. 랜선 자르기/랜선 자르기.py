k, n = map(int, input().split())
ls = []
for _ in range(k):
    ls.append(int(input()))
low, high = 1, max(ls)
while low <= high:
    mid = (low+high)//2
    ans = 0
    for i in range(len(ls)):
        ans += ls[i]//mid
    if ans < n:
        high = mid-1
    else:
        low = mid+1
print(high)
