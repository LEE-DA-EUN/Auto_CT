const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const ls = input.slice(1).map(line => line.split(" ").map(Number));

const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
const dy = [-1, 0, 1, -1, 1, -1, 0, 1];

let q = [];
let ans = 0;

for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
        if (ls[i][j] === 1) {
            q.push([i, j, 0]);
        }
    }
}

while (q.length) {
    const [x, y, tmp] = q.shift();

    for (let d = 0; d < 8; d++) {
        const nx = x + dx[d];
        const ny = y + dy[d];

        if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
        if (ls[nx][ny] > 0) continue;
        ls[nx][ny] = tmp + 1;
        ans = Math.max(ans, ls[nx][ny]);
        q.push([nx, ny, tmp + 1]);

    }
}
console.log(ans);
