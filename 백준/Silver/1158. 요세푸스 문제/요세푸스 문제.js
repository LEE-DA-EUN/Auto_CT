const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();
const [n, k] = input.split(" ").map(Number);
const q = [];
const ans = [];

for (let i = 1; i <= n; i++) {
  q.push(i);
}

while (q.length > 0) {
  for (let i = 0; i < k - 1; i++) {
    q.push(q.shift());
  }
  ans.push(q.shift());
}

console.log(`<${ans.join(", ")}>`);
