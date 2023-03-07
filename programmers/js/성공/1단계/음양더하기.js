/*
주소
https://programmers.co.kr/learn/courses/30/lessons/76501

문제 설명
배열이 true면 +
false면 -

*/

function solution(absolutes, signs) {
  var answer = 0;

  absolutes.forEach((abs, index) => {
    answer += abs * (signs[index] ? 1 : -1);
  });

  return answer;
}
let ans;

ans = solution([4, 7, 12], [true, false, true]);
console.log("ans :", ans);
