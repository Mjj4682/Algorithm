function solution(s, n) {
    let answer;
    const array = s.split('')
    const realArray = [];
    for(let i = 0; i < array.length; i++){
        realArray.push(s.charCodeAt(i))
    }
    const answerArray = [];
    for(let real of realArray){
        for(let i = 0; i < n; i++){
            real = real + 1
            if(real == 33){
                real = 32
            }
            else if (real == 91){
                real = 65
            }
            else if (real == 123){
                real = 97
            }
        }
        answerArray.push(String.fromCharCode(real))
    }
    answer = (answerArray.join(""))
    return answer;
}