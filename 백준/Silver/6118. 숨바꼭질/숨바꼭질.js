const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(-1);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

visited[1] = 0;
const q = [1];
let dist = 0;
let far = 1;
let cnt = 0;

while (q.length) {
  const now = q.shift();

  for (const i of graph[now]) {
    if (visited[i] === -1) {
      visited[i] = visited[now] + 1;
      q.push(i);

      if (visited[i] > dist) {
        dist = visited[i];
        far = i;
        cnt = 1;
      } else if (visited[i] === dist) {
        far = Math.min(far, i);
        cnt++;
      }
    }
  }
}

console.log(far, dist, cnt);
