function solution(answers) {
    const answer = [];
    const a1 = []
    const a2 = []
    const a3 = []
    for(let i1 = 0; i1 < 10000; i1++){
            a1.push(1, 2, 3, 4, 5)
        }
    for(let i2 = 0; i2 < 10000; i2++){
            a2.push(2, 1, 2, 3, 2 ,4, 2, 5)
        }
    for(let i3 = 0; i3 < 10000; i3++){
            a3.push(3, 3, 1, 1, 2, 2, 4, 4, 5, 5)
        }
    const b1 = a1.slice(0, answers.length)
    const b2 = a2.slice(0, answers.length)
    const b3 = a3.slice(0, answers.length)
    let c1 = 0
    let c2 = 0
    let c3 = 0
    for(let i4 = 0; i4 < answers.length; i4++){
        if(answers[i4] == b1[i4]){
            c1 = c1 + 1
        }
        if(answers[i4] == b2[i4]){
            c2 = c2 + 1
        }
        if(answers[i4] == b3[i4]){
            c3 = c3 + 1
        }
    }
    const max = Math.max(c1, c2, c3);
    if(c1 == max){
        answer.push(1)
    };
    if(c2 == max){
        answer.push(2)
    };
    if(c3 == max){
        answer.push(3)
    };
    return answer;
}