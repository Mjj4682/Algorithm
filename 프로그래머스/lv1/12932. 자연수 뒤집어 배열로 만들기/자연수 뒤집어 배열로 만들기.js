function solution(n) {
    let answer = [];
    let nstr = String(n).split('')
    for(let k of nstr){
        answer.unshift(Number(k))
    }
    return answer;
}