const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const ls = input.slice(1).map(Number);

ls.sort((a, b) => a - b);

let ans = 0;
for (let i = 0; i < N; i++) {
  ans += Math.abs(i + 1 - ls[i]);
}

console.log(ans);
