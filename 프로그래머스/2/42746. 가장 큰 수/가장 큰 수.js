function solution(numbers) {
    var answer = '';
    
    let ls = numbers.map(String);
    
    ls.sort((a,b)=>(b+a)-(a+b));
    
    answer = ls.join("");
    
    if (answer[0] === "0"){
        answer = "0"
    }
    
    return answer;
}