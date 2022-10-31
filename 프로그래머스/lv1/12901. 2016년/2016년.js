const a = 5
const b = 24

function solution(a, b) {
    var answer = '';
    let fday = 0;
    const today = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    for(let i = 1; i < a; i++){
        fday = fday + month[i]
    }
    fday = fday + b
    answer = today[(fday + 4) % 7]
    return answer;
}