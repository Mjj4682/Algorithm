function solution(s) {
    let answer = '';
    const sarr = [...s]
    slength = sarr.length
    if(sarr.length % 2 == 1){
        answer = sarr[(slength-1)/2]
    }
    else{
        answer = sarr[(slength/2)-1] + sarr[slength/2]
    }
    return answer;
}