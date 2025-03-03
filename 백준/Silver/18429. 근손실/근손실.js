const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [n, k] = input.shift().split(" ").map(Number);
const ls = input[0].split(" ").map(Number);
const visited = Array(n).fill(false);
let ans = 0;

function backtrack(cnt, w) {
  if (cnt === n) {
    ans++;
    return;
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i] && w + ls[i] - k >= 500) {
      visited[i] = true;
      backtrack(cnt + 1, w + ls[i] - k);
      visited[i] = false;
    }
  }
}

backtrack(0, 500);
console.log(ans);
