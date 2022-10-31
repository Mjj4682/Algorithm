function solution(x) {
    let answer = true;
    let xx = 0;
    let y = x
    for(let i = 0; i < x.toString().length; i++){
       xx = xx + (y % 10)
       y = parseInt(y / 10) 
    }
    if(x % xx == 0){
        answer = true
    }
    else {
        answer = false
    }
    return answer;
}