from itertools import permutations

n = int(input())
k = int(input())
ls = []
ans = []
for i in range(n):
    ls.append(input())
for i in permutations(ls, k):
    check = ''
    for j in range(k):
        check += i[j]
    if check not in ans:
        ans.append(check)
print(len(ans))
