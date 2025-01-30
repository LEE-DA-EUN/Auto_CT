function solution(progresses, speeds) {
    var answer = [];
    const days = [];

    for (let i = 0; i < progresses.length; i++) {
        let progress = 100 - progresses[i];
        let speed = speeds[i];
        let tmp = Math.ceil(progress / speed);
        days.push(tmp);
    }
    
    let head = days[0];
    let cnt = 0;
    
    for (let i of days) {
        if (i <= head) {
            cnt++;
        } else {
            answer.push(cnt);
            cnt = 1;
            head = i;
        }
    }
    
    answer.push(cnt);
    return answer;
}
