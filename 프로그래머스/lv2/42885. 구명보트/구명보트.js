function solution(people, limit) {
    people.sort(function(a, b) {
        return a - b;
    });
    let answer = 0;
    while(people.length !== 0){
        if(people[0] + people[people.length-1] <= limit){
            answer++
            people.pop()
            people.shift()
        }
        else{
            answer++
            people.pop()
        }
    }
    
    return answer;
}