function solution(N, stages) {
    let answer = [];
    let k = {};
    let fail = [];
    for(let i = 1; i < N+1; i++){
        let user = 0;
        let remain = 0;
        for(let s of stages){
            if(i <= s){
                user++
            }
            if(i == s){
                remain++
            }
        }
        let percent = remain / user
        k[i] = percent
    }
    let test = Object.entries(k).sort(([, a], [, b]) => b - a);
    for(let j = 0; j < test.length; j++){
        test[j][0] = Number(test[j][0])
        answer.push(test[j][0])
    }
    return answer;
}