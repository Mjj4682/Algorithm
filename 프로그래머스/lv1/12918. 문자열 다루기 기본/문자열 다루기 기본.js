function solution(s) {
  let aaa = /^\d{6}$|^\d{4}$/;
  return aaa.test(s);
}