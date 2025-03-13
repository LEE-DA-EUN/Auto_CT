def palindrome(check, left, right):
    while left < right:
        if check[left] != check[right]:
            return False
        left += 1
        right -= 1
    return True

T = int(input())
for _ in range(T):
    check = list(input())
    ans = 0
    left, right = 0, len(check) - 1

    if palindrome(check, left, right):
        ans = 0

    else:
        while left < right:
            if check[left] != check[right]:
                if palindrome(check, left+1, right) or palindrome(check, left, right-1):
                    ans = 1
                else:
                    ans = 2
                break
            left += 1
            right -= 1
    print(ans)