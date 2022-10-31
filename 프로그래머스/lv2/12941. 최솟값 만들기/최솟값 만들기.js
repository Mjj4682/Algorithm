function solution(A,B){
    let answer = 0;
    A.sort((a, b) => {
    return a - b;
    });
    B.sort((a, b) => {
    return b - a;
    });
    A.forEach((x, i) =>{
        answer = answer + (x * B[i])
    })
    return answer;
}