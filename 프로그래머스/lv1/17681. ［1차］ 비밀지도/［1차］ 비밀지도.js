function solution(n, arr1, arr2) {
    let answer = [];
    let padding = '0000000000000000'
    let rr = [];
    let rone = [];
    for(let i = 0; i < arr1.length; i++){
        let a = String((Number(arr1[i].toString(2).padStart(n, '0')) + Number(arr2[i].toString(2).padStart(n, '0'))))
        rr.push(a.padStart(n, '0'));
    }
    for(let i = 0; i < rr.length; i++){
        rone.push((rr[i].split('')))
    }
    for(let i = 0; i < rone.length; i++){
        for(let j = 0; j < rone.length; j ++){
            if(rone[i][j] == 1 || rone[i][j] == 2){
                rone[i][j] = '#'
            }
            else {
                rone[i][j] = ' '
            }
        }
    }
    for(let r of rone){
        answer.push(r.join(''))
    }
    return answer;
}


