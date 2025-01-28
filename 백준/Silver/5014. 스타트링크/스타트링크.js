const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ");

const [F, S, G, U, D] = input.map(Number);
const visited = Array(F + 1).fill(false);
const q = [[S, 0]];
visited[S] = true;

let head = 0;

while (head < q.length) {
  const [tmp, cnt] = q[head++];
  if (tmp === G) {
    console.log(cnt);
    return;
  }
  if (tmp + U <= F && !visited[tmp + U]) {
    visited[tmp + U] = true;
    q.push([tmp + U, cnt + 1]);
  }
  if (tmp - D > 0 && !visited[tmp - D]) {
    visited[tmp - D] = true;
    q.push([tmp - D, cnt + 1]);
  }
}

console.log("use the stairs");
