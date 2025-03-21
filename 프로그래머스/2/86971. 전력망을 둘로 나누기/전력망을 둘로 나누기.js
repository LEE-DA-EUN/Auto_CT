function solution(n, wires) {
  var answer = n;

  for (let i = 0; i < wires.length; i++) {
    const tmp = wires.slice();
    tmp.splice(i, 1);

    const graph = Array.from({ length: n + 1 }, () => []);
    for (const [a, b] of tmp) {
      graph[a].push(b);
      graph[b].push(a);
    }

    const visited = Array(n + 1).fill(false);
    const q = [1];
    visited[1] = true;
    let cnt = 1;

    while (q.length) {
      const now = q.shift();
      for (const i of graph[now]) {
        if (visited[i]) continue;
        visited[i] = true;
        q.push(i);
        cnt++;
      }
    }

    let num = Math.abs(cnt - (n - cnt));
    answer = Math.min(answer, num);
  }

  return answer;
}
