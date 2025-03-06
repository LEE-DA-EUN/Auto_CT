const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = parseInt(input[0]);
let idx = 1;

for (let t = 0; t < T; t++) {
    const N = parseInt(input[idx]);
    const ls = input[idx + 1].split(" ").map(Number);
    idx += 2;

    const cnt = new Map();
    ls.forEach(num => cnt.set(num, (cnt.get(num) || 0) + 1));
    const filtered = ls.filter(num => cnt.get(num) === 6);

    const dict = new Map();
    let rank = 1;
    filtered.forEach(num => {
        if (!dict.has(num)) dict.set(num, []);
        dict.get(num).push(rank);
        rank++;
    });

    const nums = [];
    for (let [k, v] of dict.entries()) {
        nums.push([k, v.slice(0, 4).reduce((a, b) => a + b, 0), v[4]]);
    }
    nums.sort((a, b) => a[1] - b[1] || a[2] - b[2]);

    console.log(nums[0][0]);
}
