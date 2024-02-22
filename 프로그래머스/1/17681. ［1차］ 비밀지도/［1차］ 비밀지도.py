def biMap(arr):
    ans = []
    for i in arr:
        num = format(i, 'b')
        if len(num) < len(arr):
            tmp = '0'*(len(arr)-len(num)) + num
            ans.append(tmp)
        else:
            ans.append(num)
    return ans

def solution(n, arr1, arr2):
    answer = []
    a1 = biMap(arr1)
    a2 = biMap(arr2)
    for i in range(n):
        tmp = ''
        for j in range(n):
            if int(a1[i][j]) + int(a2[i][j]) == 0:
                tmp += ' '
            else:
                tmp += '#'
        answer.append(tmp)
    return answer