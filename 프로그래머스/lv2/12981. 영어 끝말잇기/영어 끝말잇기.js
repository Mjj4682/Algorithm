function solution(n, words) {
    const checkArr =[]
    for(let i = 1; i < words.length; i++){
        checkArr.push(words[i-1])
        if(words[i].charAt(0) !== words[i-1].charAt(words[i-1].length - 1)){
            return([i % n + 1, (parseInt(i / n)) + 1])
        }
        for(let j = 0; j < checkArr.length; j++){
            if(checkArr[j] === words[i]){
               return([i % n + 1, (parseInt(i / n)) + 1])
            }
        }
    }
    return [0, 0]
}