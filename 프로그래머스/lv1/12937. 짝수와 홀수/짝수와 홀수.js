function solution(num) {
    let answer = '';
    if(num % 2 == 1 || num % 2 == -1){
        answer = 'Odd'
    }
    if(num % 2 == 0){
        answer = 'Even'
    }
    return answer;
}