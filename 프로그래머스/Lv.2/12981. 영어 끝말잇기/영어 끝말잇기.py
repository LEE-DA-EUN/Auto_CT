def solution(n, words):
    answer = [0,0]
    check = 0 # 틀린 경우 숫자 조정
    word = [words[0]] #중복된 단어 확인을 위한 리스트
    ls = [list(words[0])[-1]] # 끝말잇기 확인을 위한 리스트
    for i in range(1, len(words)):
        if words[i] in word: #중복확인
            check = i
            break
        else:
            word.append(words[i])
            
        w = list(words[i])
        if w[0] == ls[-1]: #끝말잇기확인
            ls.append(w[-1])
        else:
            check = i
            break
    if check != 0:
        answer = [i%n+1,i//n+1]
        
    return answer