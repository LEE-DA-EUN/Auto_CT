const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const num = input[1].split(" ").map(Number);
let ans = 0;
let q = Array.from({ length: N }, (_, i) => i + 1);

for (let i of num) {
  const idx = q.indexOf(i);
  const left = idx;
  const right = q.length - idx;

  ans += Math.min(left, right);
  q = q.slice(idx + 1).concat(q.slice(0, idx));
}

console.log(ans);
