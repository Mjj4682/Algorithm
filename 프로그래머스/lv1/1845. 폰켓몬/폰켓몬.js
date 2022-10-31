function solution(nums) {
    var answer = 0;
    let a = [...new Set(nums)].length;
    if(a > (nums.length) / 2){
        answer = (nums.length) / 2
    }
    else {
        answer = a
    }
    return answer;
}