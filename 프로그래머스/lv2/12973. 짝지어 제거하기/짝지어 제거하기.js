function solution(s){
    let answer = 0;
    const arr = []
    for(let i = 0; i < s.length; i++){
        if(s[i] === arr[arr.length-1]){
            arr.pop(i)
        }
        else {
            arr.push(s[i])
        }
    }
    if(arr.length === 0){
        return 1
    }
    return answer
}