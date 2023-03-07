/*
주소


문제 설명


*/

const parser = (num, length) => {
  let str = "";

  while (num >= 1) {
    str += num % 2;
    num = Math.floor(num / 2);
  }
  const arr = str.split("").reverse().join("").padStart(length, 0).split("");
  return arr;
};

function solution(n, arr1, arr2) {
  const maps = []; // a, b 지도가 들어갈 변수
  const readMap = (map, cur, index) => {
    console.log("index :", index);
    const binary = parser(cur, n);
    return [...map, binary];
  };

  console.log("arr1 :", arr1);

  maps.push(arr1.reduce(readMap, []));
  maps.push(arr2.reduce(readMap, []));
  // answer = parser(20, n);
  console.log("maps :", maps);

  const answer = [];
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      const cell = maps[0][i][j] | maps[1][i][j] ? "#" : " ";
      row += cell;
    }
    answer.push(row);
  }

  return answer;
}
let ans;

ans = solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
console.log("ans :", ans);
