def solution(players, callings):
    answer = {player: i for i, player in enumerate(players)}
    for i in callings:
        num = answer[i]
        answer[i] -= 1
        answer[players[num-1]] += 1
        players[num], players[num-1] = players[num-1], players[num]        
        
    return players