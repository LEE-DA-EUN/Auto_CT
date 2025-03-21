const fs = require("fs");
const { parse } = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = parseInt(input[0]);
const M = parseInt(input[1]);
const ls = input[2].split(" ").map(Number);
const dist = [ls[0], N - ls[ls.length - 1]];

for (let i = 1; i < ls.length; i++) {
  const num = Math.ceil((ls[i] - ls[i - 1]) / 2);
  dist.push(num);
}

console.log(Math.max(...dist));