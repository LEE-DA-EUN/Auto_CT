const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, K] = input;
const MAX = 100000;
const visited = Array(MAX + 1).fill(false);
visited[N] = true;
const q = [[N, 0]];
let ans = 0;

while (q.length > 0) {
  const [tmp, time] = q.shift();

  if (tmp === K) {
    ans = time;
    break;
  }

  for (const i of [tmp - 1, tmp + 1, tmp * 2]) {
    if (i < 0 || i > MAX) continue;
    if (visited[i]) continue;

    visited[i] = true;
    q.push([i, time + 1]);
  }
}
console.log(ans);
