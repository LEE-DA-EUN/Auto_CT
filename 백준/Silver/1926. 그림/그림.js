const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const ls = input.slice(1).map((line) => line.split(" ").map(Number));
const visited = Array.from({ length: N }, () => Array(M).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let ans = 0;
let cnt = 0;
const q = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (ls[i][j] === 1 && !visited[i][j]) {
      cnt++;
      let tmp = 0;
      visited[i][j] = true;
      q.push([i, j]);

      while (q.length) {
        const [x, y] = q.shift();
        tmp++;

        for (let d = 0; d < 4; d++) {
          const nx = x + dx[d];
          const ny = y + dy[d];

          if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
          if (ls[nx][ny] === 0 || visited[nx][ny]) continue;

          visited[nx][ny] = true;
          q.push([nx, ny]);
        }
      }
      ans = Math.max(ans, tmp);
    }
  }
}

console.log(cnt);
console.log(ans);
