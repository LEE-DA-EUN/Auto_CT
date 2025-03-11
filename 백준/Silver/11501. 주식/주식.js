const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;
const T = parseInt(input[idx++]);

for (let t = 0; t < T; t++) {
    const N = parseInt(input[idx++]);
    const ls = input[idx++].split(" ").map(Number);

    let num = 0;
    let ans = 0;

    for (let i = N - 1; i >= 0; i--) {
        if (ls[i] > num) {
            num = ls[i];
        } else {
            ans += num - ls[i];
        }
    }

    console.log(ans);
}
