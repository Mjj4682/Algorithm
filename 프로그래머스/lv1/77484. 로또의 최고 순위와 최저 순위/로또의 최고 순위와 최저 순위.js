function solution(lottos, win_nums) {
    let answer = [];
    let good = 7;
    let bad = 7;
    for(let i = 0; i < 6; i++){
        if(lottos[i] == 0){
            good = good - 1
        }
       for(let j = 0; j < 6; j++){
           if(lottos[i] == win_nums[j]){
               good = good - 1
               bad = bad - 1
           }
       } 
    }
    if(good == 7){
        good = 6
    }
    if(bad == 7){
        bad = 6
    }
    answer.push(good)
    answer.push(bad)
    return answer;
}