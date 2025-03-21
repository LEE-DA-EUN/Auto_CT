function solution(word) {
    var answer = 0;
    const alphabet = ['A', 'E', 'I', 'O', 'U'];

    function dfs(now) {
        if (now.length > 0) answer++;

        if (now === word) {
            return true;
        }

        if (now.length >= 5) return false;

        for (let i = 0; i < alphabet.length; i++) {
            if (dfs(now + alphabet[i])) return true;
        }

        return false;
    }

    dfs("");
    return answer;
}
