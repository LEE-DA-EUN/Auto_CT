X,Y,W,S = map(int, input().split())

num1 = (X+Y)*W
num2 = min(X,Y)*S + abs(X-Y)*W
if S < W:
    num3 = max(X,Y)*S
    if (X-Y)%2 == 1:
        num3 += W - S
else:
    num3 = num1

print(min(num1,num2,num3))