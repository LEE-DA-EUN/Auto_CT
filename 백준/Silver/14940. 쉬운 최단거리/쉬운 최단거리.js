const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const ls = input.slice(1).map((line) => line.split(" ").map(Number));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const ans = Array.from({ length: N }, () => Array(M).fill(-1));
const q = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (ls[i][j] === 2) {
      q.push([i, j]);
      ans[i][j] = 0;
    } else if (ls[i][j] === 0) {
      ans[i][j] = 0;
    }
  }
}

let head = 0;
while (head < q.length) {
  const [x, y] = q[head++];

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    if (ls[nx][ny] !== 1 || ans[nx][ny] !== -1) continue;

    ans[nx][ny] = ans[x][y] + 1;
    q.push([nx, ny]);
  }
}

console.log(ans.map((row) => row.join(" ")).join("\n"));
