const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const ls = input[1].split(" ").map(Number);

let left = 0;
let right = 0;
let sum = 0;
let cnt = 0;

while (right < N) {
  sum += ls[right];

  while (sum > M && left <= right) {
    sum -= ls[left];
    left++;
  }

  if (sum === M) cnt++;

  right++;
}

console.log(cnt);
