/*
주소


문제 설명


*/
// 1. 2진 <-> 10진으로 변경하는 함수
// 2. n+2 숫자부터 1의개수 비교해서 같으면 멈춤.

// 0011 이면  ['0','0','1','1']로 만들고 뒤집어서 1 2 4 8 이런식으로 하려고 함.
const b2d = (binary) => {
  let value = 1;
  const arr = binary.toString().split("").reverse();
  return arr
    .reduce((acc, cur) => {
      console.log(acc);
      console.log(cur);
      return +acc + +cur * 2;
    })
    .toString();
};

const d2b = (decimal) => {
  let arr = "";
  let value = 1;
  while (decimal > 1) {
    console.log(arr, decimal);
    const v = decimal % 2;
    arr += v;
    console.log(v);
    decimal ;
  }
  arr += decimal;
  return arr.split("").reverse().join("");
};

function solution(n) {
  var answer = 0;
  return d2b(n);
}

const ans = solution(73);
console.log("ans :", ans);
