function solution(left, right) {
    let answer = 0;
    let arr = [];
    let arr1 = [];
    for(let i = left; i <= right; i++){
        arr.push(i)   
    }
    for(let a of arr){
        let count = 0;
        for(let i = 1; i <= a; i++){
            if(a % i == 0){
                count = count + 1
            }
        }
        arr1.push(count)
    }
    for(let i = 0; i < arr.length; i++){
        if(arr1[i] % 2 == 0){
            answer = answer + arr[i]
        }
        else {
            answer = answer - arr[i]
        }
    } 
    return answer;
}