const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    let i = this.heap.length - 1;
    while (i > 0 && this.heap[i] < this.heap[Math.floor((i - 1) / 2)]) {
      [this.heap[i], this.heap[Math.floor((i - 1) / 2)]] = [
        this.heap[Math.floor((i - 1) / 2)],
        this.heap[i],
      ];
      i = Math.floor((i - 1) / 2);
    }
  }

  pop() {
    if (this.heap.length === 0) return 0;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();

    let i = 0;
    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;

      if (left < this.heap.length && this.heap[left] < this.heap[smallest])
        smallest = left;
      if (right < this.heap.length && this.heap[right] < this.heap[smallest])
        smallest = right;
      if (smallest === i) break;

      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
    return min;
  }
}

const heap = new MinHeap();
const ans = [];

for (let i = 1; i < input.length; i++) {
  if (input[i] === 0) {
    ans.push(heap.pop());
  } else {
    heap.push(input[i]);
  }
}

console.log(ans.join("\n"));
