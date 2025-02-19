function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let bridge = Array(bridge_length).fill(0);
    let now = 0; // 현재 다리위에 올라가 있는 트럭의 총 무게
    
    while (truck_weights.length){
        answer++;
        now -= bridge.shift();
        let tmp = 0;
        
        if (now + truck_weights[0] <= weight){
            tmp = truck_weights.shift();
            now += tmp;
        }
        bridge.push(tmp);
        
    }
    
    answer += bridge_length;
    return answer;
}