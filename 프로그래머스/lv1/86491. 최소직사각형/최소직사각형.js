function solution(sizes) {
    let answer
    const size0 = []
    const size1 = []
    for(let size of sizes){
        size.sort((a, b) => a - b)
        size0.push(size[0])
        size1.push(size[1])
    }
    answer = Math.max(...size0) * Math.max(...size1)
    return answer;
}