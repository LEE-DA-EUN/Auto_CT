const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0], 10);
const ls = input.slice(1).map(Number);
const stack = [];
const ans = [];
let tmp = 1;

for (let i of ls) {
  while (tmp <= i) {
    stack.push(tmp);
    ans.push("+");
    tmp++;
  }

  if (stack[stack.length - 1] === i) {
    stack.pop();
    ans.push("-");
  } else {
    console.log("NO");
    process.exit(0);
  }
}
console.log(ans.join("\n"));
