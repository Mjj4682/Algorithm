function solution(s) {
    let answer;
    const sArray = s.split(' ')
    let numberArray = sArray.map(x => Number(x))
    let max = String(Math.max(...numberArray)) 
    let min = String(Math.min(...numberArray))
    answer = min+" "+max
    return answer;
}