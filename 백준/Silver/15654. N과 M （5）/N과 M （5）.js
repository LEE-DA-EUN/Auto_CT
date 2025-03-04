function backtrack() {
  if (path.length === M) {
    console.log(path.join(" "));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    path.push(ls[i]);
    backtrack();
    path.pop();
    visited[i] = false;
  }
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const ls = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const visited = new Array(N).fill(false);
const path = [];

backtrack();
