const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const doc = input[0];
const find = input[1];
let ans = 0;
let i = 0;

while (i <= doc.length - find.length) {
  if (doc.slice(i, i+find.length) === find) {
    ans++;
    i += find.length;
  } else {
    i++;
  }
}

console.log(ans);