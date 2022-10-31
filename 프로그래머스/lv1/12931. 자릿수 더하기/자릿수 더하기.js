function solution(n)
{
    var answer = 0;
    let n1 = n.toString()
    let n2 = n1.split('')
    for(let k of n2){
        let k1 = Number(k)
        answer = answer + k1
    }

    return answer;
}