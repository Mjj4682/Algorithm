function solution(n) {
    let answer = 0;
    const fun = ((x) => {
        let sum = 0
        for(let i = x; i >= 1; i--){
            sum = sum + i
            if(sum === n){
                answer++
                break
            }
            if(sum > n){
                break
            }
        }
    })
    for(let i = n; i >= 1; i--){
        fun(i)
    }
    return answer;
}