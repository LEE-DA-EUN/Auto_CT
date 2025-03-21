const fs = require("fs");
const { parse } = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const N = parseInt(input[0]);
const ls = input.slice(1, N + 1).map((line) => line.trim().split(""));
let cookie = [];
let ans = [0,0,0,0,0];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (ls[i][j] === "*") {
      cookie.push([i + 1, j + 1]);
    }
  }
}
const heart = [cookie[0][0] + 1, cookie[0][1]];
console.log(heart[0], heart[1]);

for (const [x,y] of cookie){
  if (x === heart[0] && y < heart[1]){
    ans[0]++;
  }
  else if (x === heart[0] && y > heart[1]){
    ans[1]++;
  }
  else if (x > heart[0] && y === heart[1]){
    ans[2]++;
  }
  else if (x > heart[0] && y === heart[1]-1){
    ans[3]++;
  }
  else if (x > heart[0] && y === heart[1]+1){
    ans[4]++;
  }
}
console.log(ans.join(" "));
