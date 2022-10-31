function solution(s) {
    var answer = '';
    let kk = ''
    let word = s.split(' ')
    for(let w of word){
        let w1 = w.split('');
        for(let i = 1; i < w1.length + 1; i++){
            if(i % 2 != 0){
                w1[i-1] = w1[i-1].toUpperCase()
            }
            if(i % 2 == 0){
                w1[i-1] = w1[i-1].toLowerCase()
            }
        }
        w1 = w1.join('')
        answer = answer + w1 + ' '   
    }
    answer = answer.slice(0, -1)
    return answer;
}