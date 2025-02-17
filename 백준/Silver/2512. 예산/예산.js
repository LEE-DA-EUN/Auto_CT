const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const budgets = input[1].split(" ").map(Number);
const M = Number(input[2]);

let left = 0;
let right = Math.max(...budgets);
let ans = 0;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let total = budgets.reduce((sum, b) => sum + Math.min(b, mid), 0);

  if (total <= M) {
    ans = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(ans);
