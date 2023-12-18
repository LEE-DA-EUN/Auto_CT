def solution(phone_number):
    num = len(phone_number)
    answer = '*' * (num-4)
    for i in range(num-4, num):
        answer += phone_number[i]
    return answer