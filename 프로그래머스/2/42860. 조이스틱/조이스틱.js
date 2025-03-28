function solution(name) {
    let answer = 0;

    for (let i = 0; i < name.length; i++) {
        const tmp = name.charCodeAt(i);
        const up = tmp - 'A'.charCodeAt(0);
        const down = 'Z'.charCodeAt(0) - tmp + 1;
        answer += Math.min(up, down);
    }

    const n = name.length;
    let move = n - 1;

    for (let i = 0; i < n; i++) {
        let nxt = i + 1;
        while (nxt < n && name[nxt] === 'A') {
            nxt++;
        }

        const left = i;
        const right = n - nxt;

        move = Math.min(move, left * 2 + right);
        move = Math.min(move, left + right * 2);
    }

    answer += move;
    return answer;
}
