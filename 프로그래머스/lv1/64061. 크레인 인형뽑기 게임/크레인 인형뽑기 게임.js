function solution(board, moves) {
    var answer = 0;
    let arrC = [];
    let arrFinal = [];
    let temp = '';
    let count = true;
    let i=0;
    let j=0;
    for(i=0; i<moves.length; i++){
        temp = moves[i]-1
        for(j=0; j<board.length; j++){
            if(board[j][temp] != 0 ){
                arrC.push(board[j][temp])
                board[j][temp] = 0;
                break;
            }
        }
    }
    const arr = [...arrC];
    while(count){
        i=0;
        j=1;
        arrFinal = [];
        while(i<arrC.length){
            if(arrC[i] === arrC[j]){
                i += 2;
                j += 2;
            }
            else{
                arrFinal.push(arrC[i])
                i += 1;
                j += 1;
            }
        }
        if(arrC.length === arrFinal.length) count =false;
        else arrC = arrFinal;
    }
    return arr.length - arrFinal.length;
}