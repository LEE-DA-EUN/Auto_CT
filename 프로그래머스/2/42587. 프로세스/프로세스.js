function solution(priorities, location) {
    var answer = 0;
    let q = priorities.map((priority, idx) => ({ priority, idx }));
    
    while (q.length) {
        let tmp = q.shift();
        
        if (q.some(p => p.priority > tmp.priority)) {
            q.push(tmp);
        } else {
            answer++;
            if (tmp.idx !== location) continue;
            
            return answer;
        }
    }
        
        
        
    return answer;
}