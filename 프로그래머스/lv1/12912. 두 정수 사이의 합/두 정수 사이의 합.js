function solution(a, b) {
    var answer = 0;
    let sum1 = a
    let sum2 = b
    if(a < b){
        while(a < b){
            a = a + 1
            sum1 = sum1 + a
        }
        answer = sum1
    }
    else if (a == b){
        answer = a
    }
    else if (a > b){
        while(a > b){
            b = b + 1
            sum2 = sum2 + b
        }
        answer = sum2
    }
    return answer;
}