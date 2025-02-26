class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parent = Math.floor((idx - 1) / 2);
            if (this.heap[parent] <= this.heap[idx]) break;
            [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
            idx = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        let idx = 0;
        while (true) {
            let left = 2 * idx + 1, right = 2 * idx + 2, smallest = idx;
            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
            if (smallest === idx) break;
            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
            idx = smallest;
        }
        return min;
    }
}

function solution(scoville, K) {
    var answer = 0;
    const nums = new MinHeap();
    scoville.forEach(s => nums.push(s));

    while (nums.heap.length > 1 && nums.heap[0] < K) {
        let [num1, num2] = [nums.pop(), nums.pop()];
        let tmp = num1 + (num2*2)
        nums.push(tmp);
        answer++;
    }

    if (nums.heap[0] < K){
        answer = -1;
    }
    return answer
}
