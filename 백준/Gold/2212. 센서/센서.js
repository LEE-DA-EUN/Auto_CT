const fs = require("fs");
const path = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let N = parseInt(input[0]);
let K = parseInt(input[1]);
let ls = input[2].split(" ").map(Number);
let ans = 0;

if (N > K){
  ls.sort((a, b) => a - b);
  let distances = [];
  for (let i = 0; i < N-1; i++){
    distances.push(ls[i+1] - ls[i]);
  }
  distances.sort((a, b) => b - a);
  let tmp = distances.slice(K-1);
  ans = tmp.reduce((acc, cur) => acc + cur, 0);
}
console.log(ans);
