const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, d, k, c] = input.shift().split(" ").map(Number);
const sushi = input.map(Number);
let kind = new Map();
let ans = 0;

for (let i = 0; i < k; i++) kind.set(sushi[i], (kind.get(sushi[i]) || 0) + 1);
ans = kind.has(c) ? kind.size : kind.size + 1;

for (let i = 0; i < n; i++) {
  let remove = sushi[i];
  kind.set(remove, kind.get(remove) - 1);
  if (kind.get(remove) === 0) kind.delete(remove);

  let tmp = sushi[(i + k) % n];
  kind.set(tmp, (kind.get(tmp) || 0) + 1);

  let cnt = kind.has(c) ? kind.size : kind.size + 1;
  ans = Math.max(ans, cnt);
}

console.log(ans);
