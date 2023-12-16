ls = list(input())
s = []
ans = 0
p = 0
for i in range(len(ls)):
    if ls[i] == '(':
        s.append('(')
    elif ls[i] == ')':
        if ls[i-1] == '(': #레이저일때
            s.pop(-1)
            ans += s.count('(')
        else: #레이저가 아님
            ans += 1
            s.pop(-1)
print(ans)
