def solution(name):
    answer = 0

    for ch in name:
        answer += min(ord(ch) - ord('A'), ord('Z') - ord(ch) + 1)

    n = len(name)
    move = n - 1

    for i in range(n):
        nxt = i + 1
        while nxt < n and name[nxt] == 'A':
            nxt += 1

        left = i
        right = n - nxt

        move = min(move, left * 2 + right)
        move = min(move, left + right * 2)

    answer += move
    return answer
