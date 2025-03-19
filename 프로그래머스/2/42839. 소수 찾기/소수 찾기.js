function dfs(now, rest, ls) {
    if (now.length > 0) ls.add(parseInt(now));

    for (let i = 0; i < rest.length; i++) {
        dfs(now + rest[i], rest.slice(0, i) + rest.slice(i + 1), ls);
    }
}

function solution(numbers) {
    var answer = 0;
    let ls = new Set();

    dfs("", numbers, ls);

    ls.forEach(num => {
        if (num < 2) return;
        let tmp = true;
        for (let j = 2; j * j <= num; j++) {
            if (num % j === 0) {
                tmp = false;
                break;
            }
        }
        if (tmp) answer++;
    });

    return answer;
}
