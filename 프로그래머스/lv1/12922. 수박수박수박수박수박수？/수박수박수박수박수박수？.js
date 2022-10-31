function solution(n) {
    var answer = '';
    let i = 0
    while(i < 5000){
        answer = answer + '수박'
        i = i + 1
    }
    let a = (answer.split('', n))
    answer = a.join('')
    return answer;
}