function solution(brown, yellow) {
    const sumAll = brown + yellow;
    const squtAll = Math.ceil(Math.sqrt(sumAll))
    for(let i = squtAll; i < brown; i++){
        for(let j = squtAll; j >= 1; j--){
            if(i * j === sumAll && (i-2) * (j-2) == yellow){
                return [i, j]
            }
        }
    }
}