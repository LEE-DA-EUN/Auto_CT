const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

const N = Number(input[0]);
const ls = input.slice(1);
const q = [];
let now = 0;
let ans = [];

for (let i = 0; i < N; i++) {
  const tmp = ls[i];

  if (tmp.startsWith("push")) {
    const [, num] = tmp.split(" ");
    q.push(Number(num));
  } else if (tmp === "pop") {
    if (now === q.length) {
      ans.push(-1);
    } else {
      ans.push(q[now]);
      now++;
    }
  } else if (tmp === "size") {
    ans.push(q.length - now);
  } else if (tmp === "empty") {
    ans.push(now === q.length ? 1 : 0);
  } else if (tmp === "front") {
    if (now === q.length) {
      ans.push(-1);
    } else {
      ans.push(q[now]);
    }
  } else if (tmp === "back") {
    if (now === q.length) {
      ans.push(-1);
    } else {
      ans.push(q[q.length - 1]);
    }
  }
}
console.log(ans.join("\n"));
