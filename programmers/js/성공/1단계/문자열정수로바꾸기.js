/*
주소


문제 설명


*/

function solution(s) {
  // return +s; //문자열과 숫자열의 사칙연산은 숫자가 나오게 됩니다
  //  return str / 1;
  // return Number(s);
  return parseInt(s);
}
let ans;

ans = solution("-1234");
console.log("ans :", ans);
