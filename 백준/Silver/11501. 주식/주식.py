T = int(input())
for _ in range(T):
    N = int(input())
    ls = list(map(int, input().split()))
    num = 0
    ans = 0

    for i in range(N-1,-1,-1):
        if ls[i] > num:
            num = ls[i]
        else:
            ans += (num-ls[i])
    print(ans)