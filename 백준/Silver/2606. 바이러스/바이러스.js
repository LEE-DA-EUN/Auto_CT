const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());
const m = Number(input.shift());

const graph = Array.from({ length: n + 1 }, () => []);
input.forEach((line) => {
  const [a, b] = line.split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
});

const visited = Array(n + 1).fill(false);
let ans = 0;
let q = [1];
visited[1] = true;

while (q.length) {
  let now = q.shift();
  for (const i of graph[now]) {
    if (!visited[i]) {
      visited[i] = true;
      q.push(i);
      ans++;
    }
  }
}

console.log(ans);
