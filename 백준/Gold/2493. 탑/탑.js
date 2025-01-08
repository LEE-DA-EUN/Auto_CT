const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const h = input[1].split(" ").map(Number);
const stack = [];
const ans = Array(N).fill(0);

for (let i = 0; i < N; i++) {
  while (stack.length && stack[stack.length - 1][0] < h[i]) {
    stack.pop();
  }

  if (stack.length) {
    ans[i] = stack[stack.length - 1][1] + 1;
  }

  stack.push([h[i], i]);
}

console.log(ans.join(" "));
