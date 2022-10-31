function solution(s){
    let a = 0;
    for(let i of s){
        if(i == "("){
            a += 1
        }
        if(i == ")"){
            a -= 1
        }
        if(a < 0){
            return false
        }
    }
    return a === 0
}