def solution(arr):
    answer = []
    arr.remove(arr[arr.index(min(arr))])
    if len(arr) == 0:
        answer.append(-1)
    else:
        answer = arr
    return answer