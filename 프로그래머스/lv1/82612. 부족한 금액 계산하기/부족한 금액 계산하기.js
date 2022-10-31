function solution(price, money, count) {
    var answer = 0;
    let sum = 0
    for(let i = 1; i < count+1; i++){
        sum = sum + (price * i)
        answer = (sum - money)
    }
    if(sum <= money){
        answer = 0
    }
    return answer;
}