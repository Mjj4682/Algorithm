function solution(n) {
    const answerArray = new Array(n+1).fill(1)
    answerArray[0] = 0
    answerArray[1] = 1
    for(let i = 2; i <= n; i++){
        answerArray[i] = (answerArray[i-2] + answerArray[i-1]) % 1234567
    }
    return answerArray[n];
}