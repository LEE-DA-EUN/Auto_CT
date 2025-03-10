const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

const [X, Y, W, S] = input;

const num1 = (X + Y) * W;
const num2 = Math.min(X, Y) * S + Math.abs(X - Y) * W;

let num3;
if (S < W) {
    num3 = Math.max(X, Y) * S;
    if ((X - Y) % 2 !== 0) num3 += W - S;
} else {
    num3 = num1;
}

console.log(Math.min(num1, num2, num3));
