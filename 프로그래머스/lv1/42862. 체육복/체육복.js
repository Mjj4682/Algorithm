function solution(n, lost, reserve) {
    let answer = 0;
    let cloth = new Array(n).fill(1)  //(1)
    console.log(cloth)
    for(let l of lost){ 
        cloth[l-1] = cloth[l-1] - 1
    } //(2)
        console.log(cloth)
    for(let r of reserve){
        cloth[r-1] = cloth[r-1] + 1
    } //(3)
        console.log(cloth)
    for(let i = 0; i < n; i++){
        if(cloth[i] == 2 && cloth[i-1] == 0){
            cloth[i-1] = 1, cloth[i] = 1
        }
        if(cloth[i] == 2 && cloth[i+1] == 0){
            cloth[i+1] = 1, cloth[i] = 1
        }
        if(cloth[i] == 2){
            cloth[i] = 1
        }
    } //(4)
        console.log(cloth)
    for(let i = 0; i < n; i++){
        answer = answer + cloth[i]
    } //(5)
        console.log(cloth)
    return answer;
}