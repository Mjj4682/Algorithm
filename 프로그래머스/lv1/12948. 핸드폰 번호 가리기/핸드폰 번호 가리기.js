function solution(phone_number) {
    var answer = '';
    const arr = [...phone_number]
    for(let i = 0; i < (arr.length) - 4; i++){
        arr[i] = '*'
    }
    answer = arr.join('')
    return answer;
}