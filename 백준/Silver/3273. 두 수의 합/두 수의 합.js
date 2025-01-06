const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const n = parseInt(input[0], 10);
const ls = input[1].split(" ").map(Number);
const x = parseInt(input[2], 10);

ls.sort((a, b) => a - b);

let left = 0;
let right = n - 1;
let ans = 0;

while (left < right) {
  const tmp = ls[left] + ls[right];

  if (tmp === x) {
    ans++;
    left++;
    right--;
  } else if (tmp < x) {
    left++;
  } else {
    right--;
  }
}

console.log(ans);
