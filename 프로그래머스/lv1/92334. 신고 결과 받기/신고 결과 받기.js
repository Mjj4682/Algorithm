function solution(id_list, report, k) {
    let answer = new Array(id_list.length).fill(0);
    let setreport = [...new Set(report)];
    let obj = {};
    id_list.map((user) => {
        obj[user] = []
    })
    setreport.map((user) => {
        let [user_id, report_id] = user.split(' ')
        obj[report_id].push(user_id)
    })
    for(let o in obj){
        if(obj[o].length >= k){
            obj[o].map((user) => {
                answer[id_list.indexOf(user)] = answer[id_list.indexOf(user)] + 1
            })
        }
    }
    return answer;
}