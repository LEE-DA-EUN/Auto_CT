const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const durability = input[1].split(" ").map(Number); // 내구도
const robots = Array(2 * N).fill(false);
let ans = 0;

const rotate = () => { //벨트, 로봇 같이 회전
  durability.unshift(durability.pop());
  robots.unshift(robots.pop());
  robots[N - 1] = false;
};

const moveRobots = () => { // 앞에 로봇이 없고 내구도가 남아있으면 로봇 이동
  for (let i = N - 2; i >= 0; i--) {
    if (robots[i] && !robots[i + 1] && durability[i + 1] > 0) {
      robots[i] = false;
      robots[i + 1] = true;
      durability[i + 1]--;
    }
  }
  robots[N - 1] = false;
};

const newRobot = () => { // 새로운 로봇 올리기
  if (durability[0] > 0) {
    robots[0] = true;
    durability[0]--;
  }
};

const count = () => { //내구도 0인 칸수 세기
  return durability.filter((d) => d === 0).length;
};

while (true) {
  ans++;
  rotate();
  moveRobots();
  newRobot();
  if (count() >= K) break;
}

console.log(ans);
