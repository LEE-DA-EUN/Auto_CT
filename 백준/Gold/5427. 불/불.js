const fs = require("fs");
const path = require("path");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

let idx = 0;
let T = parseInt(input[idx++]);

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

while (T--) {
  const [w, h] = input[idx++].split(" ").map(Number);
  const building = [];
  const fireTime = Array.from({ length: h }, () => Array(w).fill(-1));
  const visited = Array.from({ length: h }, () => Array(w).fill(false));
  const fire = [];
  const person = [];

  for (let i = 0; i < h; i++) {
    const row = input[idx++].split("");
    building.push(row);
    for (let j = 0; j < w; j++) {
      if (row[j] === "*") {
        fire.push([i, j]);
        fireTime[i][j] = 0;
      } else if (row[j] === "@") {
        person.push([i, j, 0]);
        visited[i][j] = true;
      }
    }
  }

  let fIdx = 0;
  while (fIdx < fire.length) {
    const [y, x] = fire[fIdx++];
    for (let d = 0; d < 4; d++) {
      const ny = y + dy[d];
      const nx = x + dx[d];
      if (ny >= 0 && ny < h && nx >= 0 && nx < w) {
        if (building[ny][nx] === "." && fireTime[ny][nx] === -1) {
          fireTime[ny][nx] = fireTime[y][x] + 1;
          fire.push([ny, nx]);
        }
      }
    }
  }

  let pIdx = 0;
  let escaped = false;

  while (pIdx < person.length) {
    const [y, x, t] = person[pIdx++];
    for (let d = 0; d < 4; d++) {
      const ny = y + dy[d];
      const nx = x + dx[d];

      if (ny < 0 || ny >= h || nx < 0 || nx >= w) {
        console.log(t + 1);
        escaped = true;
        break;
      }

      if (building[ny][nx] !== "." || visited[ny][nx]) continue;
      if (fireTime[ny][nx] !== -1 && fireTime[ny][nx] <= t + 1) continue;

      visited[ny][nx] = true;
      person.push([ny, nx, t + 1]);
    }
    if (escaped) break;
  }

  if (!escaped) console.log("IMPOSSIBLE");
}
