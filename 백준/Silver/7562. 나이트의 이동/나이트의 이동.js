const fs = require("fs");
const input = fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
    .toString().trim().split("\n");

const dx = [-2, -1, 1, 2, 2, 1, -1, -2];
const dy = [1, 2, 2, 1, -1, -2, -2, -1];

const T = Number(input[0]);
let idx = 1;
let ans = [];

for (let t = 0; t < T; t++) {
    const L = Number(input[idx]);
    const [sx, sy] = input[idx + 1].split(" ").map(Number);
    const [ex, ey] = input[idx + 2].split(" ").map(Number);
    idx += 3;

    ans.push(bfs(L, sx, sy, ex, ey));
}

console.log(ans.join("\n"));

function bfs(L, sx, sy, ex, ey) {
    if (sx === ex && sy === ey) return 0;

    let q = [[sx, sy, 0]];
    let head = 0;
    let visited = Array.from({ length: L }, () => Array(L).fill(false));
    visited[sx][sy] = true;

    while (head < q.length) {
        const [x, y, moves] = q[head++];

        for (let i = 0; i < 8; i++) {
            const nx = x + dx[i];
            const ny = y + dy[i];

            if (nx < 0 || ny < 0 || nx >= L || ny >= L || visited[nx][ny]) continue;
            if (nx === ex && ny === ey) return moves + 1;
            
            visited[nx][ny] = true;
            q.push([nx, ny, moves + 1]);
        }
    }
}
