function solution(brown, yellow) {
    var answer = [];
    let total = brown + yellow;

    for (let i = 1; i <= total; i++) {
        if (total % i === 0) {
            let j = total / i;
            let num = (i + j) * 2 - 4;
            if (num === brown) {
                answer = [j, i];
                break;
            }
        }
    }

    return answer;
}