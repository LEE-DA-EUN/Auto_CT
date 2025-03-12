function solution(citations) {
    var answer = citations.length;
    citations.sort((a, b) => b - a);

    for (let i = 0; i < citations.length; i++) {
        if (i + 1 > citations[i]) {
            answer = i;
            break;
        }
    }

    return answer;
}
