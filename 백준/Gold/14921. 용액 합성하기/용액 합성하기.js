const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const A = input[1].split(" ").map(Number);

let left = 0;
let right = N - 1;
let num = Infinity;

while (left < right) {
  let sum = A[left] + A[right];

  if (Math.abs(sum) < Math.abs(num)) {
    num = sum;
  }

  if (sum > 0) {
    right--;
  } else {
    left++;
  }
}

console.log(num);
