function solution(genres, plays) {
    var answer = [];
    const map = new Map();
    
    genres.forEach((genre, idx) => {
        if (!map.has(genre)) {
            map.set(genre, { total: 0, songs: [] });
        }
        map.get(genre).total += plays[idx];
        map.get(genre).songs.push({ id: idx, plays: plays[idx] });
    });

    const ls = [...map.entries()].sort((a, b) => b[1].total - a[1].total);


    for (const [genre, { songs }] of ls) {
        const tmp = songs.sort((a, b) => {
            if (b.plays === a.plays) return a.id - b.id;
            return b.plays - a.plays;
        });

        answer.push(...tmp.slice(0, 2).map((song) => song.id));
    }

    return answer;
}
