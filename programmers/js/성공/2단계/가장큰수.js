/*
주소
https://programmers.co.kr/learn/courses/30/lessons/42746

문제 설명
0 또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 알아내 주세요.

예를 들어, 주어진 정수가 [6, 10, 2]라면 [6102, 6210, 1062, 1026, 2610, 2106]를 만들 수 있고, 이중 가장 큰 수는 6210입니다.

0 또는 양의 정수가 담긴 배열 numbers가 매개변수로 주어질 때, 순서를 재배치하여 만들 수 있는 가장 큰 수를 문자열로 바꾸어 return 하도록 solution 함수를 작성해주세요.

제한 사항
numbers의 길이는 1 이상 100,000 이하입니다.
numbers의 원소는 0 이상 1,000 이하입니다.
정답이 너무 클 수 있으니 문자열로 바꾸어 return 합니다.
입출력 예
numbers	return
[6, 10, 2]	"6210"
[3, 30, 34, 5, 9]	"9534330"

*/

// js여서 가능한 풀이...
// function solution(numbers) {
//   var answer = numbers
//     .map((v) => v + "")
//     .sort((a, b) => (b + a) * 1 - (a + b) * 1)
//     .join("");

//   return answer[0] === "0" ? "0" : answer;
// }

function solution(numbers) {
  console.log("numbers :", numbers);
  let flag = numbers.some((a) => a > 0);
  console.log("flag :", flag);
  if (!flag) return "0";
  const sorted = numbers.sort((a, b) => {
    const _a = a;
    const _b = b;
    a = a + "";
    b = b + "";
    a = a.repeat(3);
    b = b.repeat(3); // 3번 반복시키면 가능..
    console.log("a :", a);
    console.log("b :", b);
    if (a === b) return _a > _b ? 1 : -1;
    else {
      if (a > b) return -1;
      else return 1;
    }
  });
  console.log("sorted :", sorted);
  const joined = sorted.join("");
  return joined;
  // const sorted = numbers.sort((a, b) => {
  //   a = "" + a;
  //   b = "" + b;
  //   const big = +a > +b ? a : b;
  //   const length = big.length;
  //   if (a.padEnd(length, 0) === b.padEnd(length, 0)) return big === a ? -1 : 1;
  //   if (a > b) return 1;
  //   if (a < b) return -1;
  //   return 0;
  // });
  // const reversed = sorted.reverse();
  // const joined = reversed.join("");
  // console.log("joined.replace(/0+/g) :", joined.replace(/0+/g, ""));
  // if (joined.replace(/0+/g, "") !== "") return joined + "";
  // return "0";
}

let ans;

ans = solution([1000, 100, 10, 1]);
console.log("ans :", ans, ans === "1101001000");
ans = solution([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log("ans :", ans, ans === "987654321");

// ans = solution([6, 10, 2]);
// console.log("ans :", ans, ans === "6210");
// ans = solution([3, 30, 34, 5, 9]);
// console.log("ans :", ans, ans === "9534330");
// ans = solution([0, 0, 0, 0]);
// console.log("ans :", ans, ans === "0");
// const arr = [9];
// for (let i = 1; i <= 100; i++) arr.push(1000);
// ans = solution(arr);
// console.log("ans :", ans);
// console.log("ans :", ans, ans === "1000100000");
