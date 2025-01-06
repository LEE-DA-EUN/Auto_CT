const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();
const N = parseInt(input, 10);
let ans = "";

for (let i = 1; i <= N; i++) {
  ans += "*".repeat(i) + " ".repeat(2 * (N - i)) + "*".repeat(i) + "\n";
}

for (let i = N - 1; i >= 1; i--) {
  ans += "*".repeat(i) + " ".repeat(2 * (N - i)) + "*".repeat(i) + "\n";
}

console.log(ans);
