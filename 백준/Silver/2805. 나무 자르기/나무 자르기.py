n, m = map(int, input().split())
ls = list(map(int, input().split()))
low, high = 1, max(ls)
while low <= high:
    mid = (low+high)//2
    ans = 0
    for i in range(len(ls)):
        if ls[i] > mid:
            ans += ls[i]-mid
    if ans >= m:
        low = mid+1
    else:
        high = mid-1
print(high)