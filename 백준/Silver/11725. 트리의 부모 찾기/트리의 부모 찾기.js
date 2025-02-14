const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const graph = Array.from({ length: N + 1 }, () => []);
const parent = Array(N + 1).fill(0);

for (let i = 1; i < N; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

function bfs() {
  let q = [1];
  let head = 0;
  parent[1] = -1;

  while (head < q.length) {
    const node = q[head++];

    for (const next of graph[node]) {
      if (parent[next] === 0) {
        parent[next] = node;
        q.push(next);
      }
    }
  }
}

bfs();
console.log(parent.slice(2).join("\n"));
