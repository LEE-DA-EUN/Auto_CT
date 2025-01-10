const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim();

let stack = [];
let tmp = 1;
let ans = 0;

for (let i = 0; i < input.length; i++) {
  const ls = input[i];
  if (ls === "(") {
    stack.push(ls);
    tmp *= 2;
  } else if (ls === "[") {
    stack.push(ls);
    tmp *= 3;
  } else if (ls === ")" || ls === "]") {
    const last = stack.pop(0);
    if ((last === "(" && ls === ")") || (last === "[" && ls === "]")) {
      if (input[i - 1] === "(" || input[i - 1] === "[") {
        ans += tmp;
      }
      tmp /= ls === ")" ? 2 : 3;
    } else {
      console.log(0);
      return;
    }
  }
}

if (stack.length !== 0) {
  console.log(0);
} else {
  console.log(ans);
}
