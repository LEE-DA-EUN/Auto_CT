const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, K] = input;
const MAX = 100000;
const visited = Array(MAX + 1).fill(-1);
let ans = 0;
let cnt = 0;

const q = [[N, 0]];
visited[N] = 0;
let head = 0;

while (head < q.length) {
  const [now, time] = q[head++];

  if (now === K) {
    if (ans === 0) {
      ans = time;
      cnt = 1;
    } else if (time === ans) {
      cnt++;
    }
    continue;
  }

  for (let next of [now - 1, now + 1, now * 2]) {
    if (next < 0 || next > MAX) continue;

    if (visited[next] === -1 || visited[next] === time + 1) {
      visited[next] = time + 1;
      q.push([next, time + 1]);

      if (visited[next] === ans) {
        cnt++;
      }
    }
  }
}

console.log(ans);
console.log(cnt);
