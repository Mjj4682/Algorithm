function solution(n) {
    var answer = 0;
    const two = ((x) => {
        return (x.toString(2)).split('1').length - 1;
    })
    for(let i = n+1; i < n+1+10; i++){
        if(two(n) === two(i)){
            return i
        }
    }
}