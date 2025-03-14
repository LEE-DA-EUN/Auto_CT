import sys
input = sys.stdin.readline

M, N = map(int, input().split())
ls = list(map(int, input().split()))

low, high = 1, max(ls)
while low <= high:
    mid = (low+high)//2
    tmp = 0
    for i in range(len(ls)):
        tmp += ls[i]//mid
    if tmp >= M:
        low = mid+1
    elif tmp < M:
        high = mid-1

print(high)