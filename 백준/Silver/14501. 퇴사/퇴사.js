const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const T = [];
const P = [];
let ans = 0;

for (let i = 1; i <= N; i++) {
    const [t, p] = input[i].split(" ").map(Number);
    T.push(t);
    P.push(p);
}

function dfs(day, total) {
    if (day >= N) {
        ans = Math.max(ans, total);
        return;
    }
    if (day+T[day] <= N) {
        dfs(day+T[day], total+P[day]);
    }
    dfs(day+1, total);
}

dfs(0, 0);
console.log(ans);
