function solution(n, m) {
    let answer = [];
    let nm = n * m
    let min = 1
    let big = Math.max(n, m)
    for(let j = big; j >= 1; j--){
        if(n % j == 0 && m % j == 0){
            answer.push(j)
            break
        }
    } 
    
    for(let i = 1; i <= nm; i++){
        if(i % n == 0 && i % m == 0){
            answer.push(i)
            break
        }
    }
    return answer;
}