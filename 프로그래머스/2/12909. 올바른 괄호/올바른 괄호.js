function solution(s){
    var answer = true;
    let stk = [];
    
    for (let i of s) {
        if (i === "("){
            stk.push("(");
        }
        else {
            if (stk.length === 0) {
                answer = false;
                break;
            }
            stk.pop();
        }
    }
    
    if (stk.length) {
        answer = false
    }

    return answer;
}