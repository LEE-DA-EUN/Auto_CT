const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, X] = input[0].split(" ").map(Number);
const ls = input[1].split(" ").map(Number);
let now = ls.slice(0, X).reduce((a, b) => a + b, 0);
let ans = now;
let cnt = 1;

for (let i = X; i < N; i++) {
  now = now - ls[i - X] + ls[i];

  if (now > ans) {
    ans = now;
    cnt = 1;
  } else if (now === ans) {
    cnt++;
  }
}
if (ans === 0) {
  console.log("SAD");
} else {
  console.log(ans);
  console.log(cnt);
}
