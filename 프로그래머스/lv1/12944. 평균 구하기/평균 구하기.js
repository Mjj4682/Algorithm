function solution(arr) {
    var answer = 0;
    let sum = 0;
    for(let a of arr){
        sum = sum + a
    }
    answer = (sum/(arr.length))
    return answer;
}