function solution(n, w, num) {
    var answer = 0;
    const idx = num - 1;
    const floor = Math.floor(idx/w);
    let col = 0;

    if (floor%2 === 0) {
        col = idx%w;
    } else {
        col = w-1-(idx%w);
    }

    for (let i = 0; i < n; i++) {
        const now_floor = Math.floor(i/w);
        let now_col = 0;

        if (now_floor%2 === 0) {
            now_col = i%w;
        } else {
            now_col = w-1-(i%w);
        }

        if (now_col === col && now_floor >= floor) {
            answer += 1;
        }
    }

    return answer;
}
