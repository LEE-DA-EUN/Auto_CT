function solution(n, lost, reserve) {
    var answer = 0
    let losts = lost.filter(i => !reserve.includes(i));
    let reserves = reserve.filter(i => !lost.includes(i));

    reserves.sort((a, b) => a - b);

    for (let i of reserves) {
        if (losts.includes(i-1)) {
            losts = losts.filter(x => x !== i - 1);
        } else if (losts.includes(i+1)) {
            losts = losts.filter(x => x !== i + 1);
        }
    }

    answer = n-losts.length;
    return answer;
}
