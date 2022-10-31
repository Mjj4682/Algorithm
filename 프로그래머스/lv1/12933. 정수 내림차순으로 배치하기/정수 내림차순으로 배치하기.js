function solution(n) {
    let answer = 0;
    let kk = [];
    let nstr = String(n).split('')
    for(let k of nstr){
        kk.push(Number(k))
    }
    kk.sort(function (a, b) { return b - a });
    let kkk = kk.join('')
    answer = Number(kkk)
    return answer;
}

