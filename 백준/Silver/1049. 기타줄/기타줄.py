N, M = map(int, input().split())
p6_price = []
p1_price = []
ans = 0
for i in range(M):
    p6, p1 = map(int, input().split())
    p6_price.append(p6)
    p1_price.append(p1)

p6_num = min(p6_price)
p1_num = min(p1_price)

if p1_num * 6 > p6_num: #패키지가 더 저렴한 경우
    ans += p6_num * (N//6)
    N = N%6
    if p1_num * N < p6_num:
        ans += p1_num * N
    else:
        ans += p6_num    
else:
    ans += p1_num * N # 낱개가 더 저렴하면 다 낱개로 구매




print(ans)