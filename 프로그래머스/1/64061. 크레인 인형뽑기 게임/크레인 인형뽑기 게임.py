def solution(board, moves):
    answer = 0
    s = [0]
    for i in range(len(moves)):
        line = moves[i]-1
        for j in range(len(board)):
            doll = board[j][line]
            if doll != 0:
                if doll == s[-1]:
                    s.pop()
                    answer += 1
                else:
                    s.append(doll)                
                board[j][line] = 0
                break
    return answer*2