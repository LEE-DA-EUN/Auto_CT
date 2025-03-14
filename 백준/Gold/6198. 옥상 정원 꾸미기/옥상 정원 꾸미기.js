const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = parseInt(input[0]);
const ls = input.slice(1).map(Number);

let stack = [];
let ans = 0;

for (let i of ls) {
  while (stack.length > 0 && stack[stack.length - 1] <= i) {
    stack.pop();
  }
  ans += stack.length;
  stack.push(i);
}

console.log(ans);
