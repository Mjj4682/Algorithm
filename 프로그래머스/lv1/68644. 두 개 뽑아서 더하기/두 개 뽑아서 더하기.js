function solution(numbers) {
    let a = [];
    for(let j = 0; j < numbers.length; j++){
        for(let i = 0; i < numbers.length; i++){
            if(i != j){
               a.push(numbers[j] + numbers[i]) 
            }
            else {
                // pass
            }
        }
    }
    let aa = [...new Set(a)];
    let answer = aa.sort(function(a, b) {return a - b})
    return answer;
}