from itertools import product
def solution(word):
    answer = 0
    alphabet = ['A', 'E', 'I', 'O', 'U']
    dic = []
    for i in range(1,6):
        for j in product(alphabet,repeat=i):
            dic.append("".join(j))
    dic.sort()
    for i in range(len(dic)):
        if dic[i] == word:
            answer = i+1
    return answer