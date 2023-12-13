def solution(players, callings):
    for i in callings:
        num = players.index(i)
        players[num], players[num-1] = players[num-1], players[num]
    return players