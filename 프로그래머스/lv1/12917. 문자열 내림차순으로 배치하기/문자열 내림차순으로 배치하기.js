function solution(s) {
    let ss = s.split('')
    ss.sort(function(a, b) {
    if(a < b) return 1;
    if(a > b) return -1;
    if(a === b) return 0;
    });
    let answer = ss.join('')
    return answer;
}