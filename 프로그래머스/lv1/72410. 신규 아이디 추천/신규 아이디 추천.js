function solution(new_id) {
    let answer = '';
    let a1 = new_id.toLowerCase()
    let a2 = a1.replace(/[\{\}\[\]\/?,;:|\)*~`!^\+<>@\#$%&\\\=\(\'\"]/gi, "")
    let a3 = a2.split('')
    for(let i = 0; i < a3.length; i++){
        if(a3[i] == '.' && a3[i+1] == '.'){
            delete a3[i]
            i--
        }
        a3 = a3.filter((el) => true);
        if(a3[0] == '.'){
            delete a3[0]
            a3 = a3.filter((el) => true);
        }
        if(a3[a3.length-1] == '.'){
            delete a3[a3.length-1]
            a3 = a3.filter((el) => true);
        }
    }
    if(a3.length == 0){
        a3.push('a')
    }
    while(a3.length >= 16){
        a3.pop()
        if(a3[a3.length-1] == '.'){
            a3.pop()
        }
    }
    while(a3.length <= 2){
        a3.push(a3[a3.length-1])
    }
    answer = a3.join('')
    return answer;
}