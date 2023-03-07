/*
주소

문제 설명

*/

function solution(n) {
  var answer = n - 1;
  for (let i = n - 2; i > 1; i--) {
    if (n % i === 1) {
      answer = i;
    }
  }
  return answer;
}
let ans;

ans = solution(10);
console.log("ans :", ans);
