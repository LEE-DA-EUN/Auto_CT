const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [M, N, H] = input[0].split(" ").map(Number);
const arr = [];
const dz = [-1, 1, 0, 0, 0, 0];
const dx = [0, 0, -1, 0, 1, 0];
const dy = [0, 0, 0, -1, 0, 1];

let q = [];
let head = 0;
let total = 0;
let tmp = 0;
let days = 0;

for (let h = 0; h < H; h++) {
  arr.push(
    input
      .slice(1 + h * N, 1 + (h + 1) * N)
      .map((line) => line.split(" ").map(Number))
  );
}

for (let h = 0; h < H; h++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (arr[h][i][j] === 1) {
        q.push([h, i, j, 0]);
      }
      if (arr[h][i][j] !== -1) total++;
    }
  }
}

while (head < q.length) {
  const [z, x, y, day] = q[head++];
  days = Math.max(days, day);
  tmp++;

  for (let d = 0; d < 6; d++) {
    const nz = z + dz[d];
    const nx = x + dx[d];
    const ny = y + dy[d];

    if (nz < 0 || nz >= H || nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
    if (arr[nz][nx][ny] !== 0) continue;

    arr[nz][nx][ny] = 1;
    q.push([nz, nx, ny, day + 1]);
  }
}

console.log(tmp === total ? days : -1);
