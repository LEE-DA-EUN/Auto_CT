function solution(clothes) {
    var answer = 1;
    const map = new Map();
    
    for (const [_, i] of clothes) {
        map.set(i, (map.get(i) || 0) + 1);
    }
   
    for (const i of map.values()) {
        answer *= (i+1);
    }
    
    return answer-1;
}