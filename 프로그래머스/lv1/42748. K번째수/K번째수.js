function solution(array, commands) {
    const answer = [];
    for (let c of commands) {
        let newarray = array.slice([c[0]-1], [c[1]])
        newarray.sort((a, b) => a - b)
        answer.push(newarray[c[2]-1])
    }
    return answer;
}