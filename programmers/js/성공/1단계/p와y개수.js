/*
주소


문제 설명


*/

// 내가 푼거
function solution(s) {
  return s.match(/p/gi).length === s.match(/y/gi).length;

  // s = s.toUpperCase();
  // const p = s.split("P").length - 1;
  // const y = s.split("Y").length - 1;
  // return p === y;
}

//속도테스트용 -> split이 대충 1.5배~3배까지도 빨랐음.
const match = (s) => {
  return s.match(/p/gi).length === s.match(/y/gi).length;
};
const split = (s) => {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
};
let ans;

ans = solution("pPoooyY");
console.log("ans :", ans);
