const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = Number(input[0]);
const ls = input.slice(1, N+1).map(Number);
let ans = 0;
ls.sort((a, b) => a - b);
for (let i = 0; i < N; i++) {
  let tmp = ls[i]*(N-i);
  ans = Math.max(ans, tmp);
}
console.log(ans);
