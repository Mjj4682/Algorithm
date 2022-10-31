function solution(s) {
    let answer = "";
    let sArray = s.split(' ')
    let mapArray = sArray.map(x => (x.slice(1, x.length)).toLowerCase())
    let mapArray2 = sArray.map(x => (x.charAt(0)).toUpperCase())
    for(let i = 0; i < mapArray2.length; i++){
        answer = answer + " " + (mapArray2[i] + mapArray[i])
    }
    return answer.substr(1);
}