const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = Array(101).fill(0);
const ans = Array(101).fill(-1);
const q = [];

for (let i = 1; i <= N + M; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  board[start] = end;
}

q.push(1);
ans[1] = 0;

let head = 0;
while (head < q.length) {
  const x = q[head++];

  if (x === 100) break;

  for (let i = 1; i <= 6; i++) {
    let nx = x + i;
    if (nx > 100) continue;

    if (board[nx]) nx = board[nx];

    if (ans[nx] === -1) {
      ans[nx] = ans[x] + 1;
      q.push(nx);
    }
  }
}

console.log(ans[100]);
