function solution(n) {
    let answer = 0;
    let nn = Math.sqrt(n)
    let nnn = Number.isInteger(nn)
    if(nnn){
        answer = (nn + 1)*(nn + 1)
    }
    else {
        answer = -1
    }
    return answer;
}