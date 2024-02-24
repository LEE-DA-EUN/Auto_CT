from math import gcd
def solution(arr):
    ans = arr[0]
    for i in arr:
        ans = ans*i//gcd(ans,i)    
    return ans