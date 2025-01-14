function solution(clothes) {
    var answer = 1;
    const map = new Map();
    
    clothes.forEach(([_, type]) => {
        map.set(type, (map.get(type) || 0) + 1);
    });
   
    for (const i of map.values()) {
        answer *= (i+1);
    }
    
    return answer-1;
}