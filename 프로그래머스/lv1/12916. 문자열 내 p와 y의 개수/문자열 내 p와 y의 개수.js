function solution(s){
    var answer = true;
    let arr = [...s]
    let sump = 0
    let sumy = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 'p' || arr[i] == 'P'){
            sump += 1
        }
        if(arr[i] == 'y' || arr[i] == 'Y'){
            sumy += 1
        }
    }
    if(sump != sumy){
        answer = false
    }
    return answer;
}