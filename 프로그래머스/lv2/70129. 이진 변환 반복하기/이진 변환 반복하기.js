function solution(s) {
    const answer = [];
    let count = 0
    let countZero = 0
    while(s !== "1"){
        countZero = countZero + s.split('0').length - 1;
        s = ((s.replace(/[^(1)]/gi,"")).length).toString(2);
        count++;
    }
    answer.push(count, countZero)
    return answer;
}