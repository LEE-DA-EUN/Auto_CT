n = int(input())
dic = {}
for _ in range(n):
    ls = list(input())
    num = len(ls)
    for i in ls:
        if i not in dic:
            dic[i] = 10**num
        else:
            dic[i] += 10**num
        num -= 1
words = sorted(dic.values(), reverse=True)
ans = 0
tmp = 9
for i in words:
    ans += i*tmp
    tmp -= 1
print(int(ans/10))