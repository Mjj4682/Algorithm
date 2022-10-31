function solution(arr) {
    let answer = [];
    let min = Math.min(...arr);
    if(arr.length == 1){
        answer.push(-1)
    }
    else {
        let result = arr.filter(a => a > min);
        answer = result
    }
    return answer;
}