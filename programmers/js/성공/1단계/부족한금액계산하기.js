/*
주소

문제 설명

*/

function solution(price, money, count) {
  let mul = 0;

  for (let i = 0; i < count; i++) {
    // 얘를 가우스 공식으로 변환 가능.. 다른 사람 풀이보고 배움
    mul = mul + i + 1;
  }

  const result = money - price * mul;

  return result >= 0 ? 0 : Math.abs(result);
}

// 다른 사람 풀이보고 따라한 것
function solution2(price, money, count) {
  const result = (price * (count * (count + 1))) / 2 - money;

  return result > 0 ? result : 0;
}

let ans;

ans = solution(3, 20, 4);
console.log("ans :", ans);
