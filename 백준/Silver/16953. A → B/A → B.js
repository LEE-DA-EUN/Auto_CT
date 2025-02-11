const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [A, B] = input;

function bfs(A, B) {
  let q = [[A, 1]];

  while (q.length > 0) {
    let [now, cnt] = q.shift();

    if (now === B) return cnt;
    if (now > B) continue;

    q.push([now * 2, cnt + 1]);
    q.push([now * 10 + 1, cnt + 1]);
  }

  return -1;
}

console.log(bfs(A, B));
