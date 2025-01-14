const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [M, N] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((line) => line.split(" ").map(Number));
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

const visited = Array.from({ length: N }, () => Array(M).fill(false));
const q = [];
let head = 0;
let total = 0;
let tmp = 0;
let days = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 1) {
      q.push([i, j, 0]);
      visited[i][j] = true;
    }
    if (arr[i][j] !== -1) total++;
  }
}

while (head < q.length) {
  const [x, y, day] = q[head++];
  days = Math.max(days, day);
  tmp++;

  for (let d = 0; d < 4; d++) {
    const nx = x + dx[d];
    const ny = y + dy[d];

    if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    if (visited[nx][ny] || arr[nx][ny] !== 0) continue;

    visited[nx][ny] = true;
    arr[nx][ny] = 1;
    q.push([nx, ny, day + 1]);
  }
}

console.log(tmp === total ? days : -1);
