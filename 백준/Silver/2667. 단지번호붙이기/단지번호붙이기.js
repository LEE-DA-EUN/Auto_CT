const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const q = [];

const N = Number(input[0]);
const arr = input.slice(1).map((line) => line.split("").map(Number));
const visited = Array.from({ length: N }, () => Array(N).fill(false));

let head = 0;
let total = 0;
const ans = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] === 1 && !visited[i][j]) {
      q.push([i, j]);
      visited[i][j] = true;
      let cnt = 0;

      while (head < q.length) {
        const [x, y] = q[head++];
        cnt++;

        for (let d = 0; d < 4; d++) {
          const nx = x + dx[d];
          const ny = y + dy[d];

          if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
          if (visited[nx][ny] || arr[nx][ny] === 0) continue;

          visited[nx][ny] = true;
          q.push([nx, ny]);
        }
      }

      ans.push(cnt);
      total++;
      head = 0;
      q.length = 0;
    }
  }
}

ans.sort((a, b) => a - b);
console.log(total);
ans.forEach((cnt) => console.log(cnt));
