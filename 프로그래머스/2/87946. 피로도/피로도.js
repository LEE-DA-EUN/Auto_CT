function solution(k, dungeons) {
  var answer = -1;
  const visited = Array(dungeons.length).fill(false);

  function dfs(now, cnt) {
    answer = Math.max(answer, cnt);

    for (let i = 0; i < dungeons.length; i++) {
      const [start, end] = dungeons[i];

      if (!visited[i] && now >= start) {
        visited[i] = true;
        dfs(now - end, cnt + 1);
        visited[i] = false;
      }
    }
  }

  dfs(k, 0);
  return answer;
}
