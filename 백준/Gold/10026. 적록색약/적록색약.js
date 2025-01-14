const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = parseInt(input[0]);
const arr = input.slice(1).map((line) => line.split(""));
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];

const bfs = (i, j, visited, type) => {
  const q = [[i, j]];
  const color = arr[i][j];
  visited[i][j] = true;

  while (q.length > 0) {
    const [x, y] = q.shift();

    for (let d = 0; d < 4; d++) {
      const nx = x + dx[d];
      const ny = y + dy[d];

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
      if (visited[nx][ny]) continue;

      if (type) {
        if (color === "R" || color === "G") {
          if (arr[nx][ny] !== "R" && arr[nx][ny] !== "G") continue;
        } else {
          if (arr[nx][ny] !== color) continue;
        }
      } else {
        if (arr[nx][ny] !== color) continue;
      }

      visited[nx][ny] = true;
      q.push([nx, ny]);
    }
  }
};

const check = (type) => {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let ans = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (visited[i][j]) continue;

      bfs(i, j, visited, type);
      ans++;
    }
  }
  return ans;
};

const num1 = check(false);
const num2 = check(true);

console.log(`${num1} ${num2}`);
