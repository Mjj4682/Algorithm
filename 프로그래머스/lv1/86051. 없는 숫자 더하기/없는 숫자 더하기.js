function solution(numbers) {
    let answer = 45;
    let mm = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for(let i = 0; i < numbers.length; i++){
        for(let j = 0; j < mm.length; j++){
            if(mm[j] == numbers[i]){
                answer = answer - mm[j]
            }
        }
    }
    return answer;
}