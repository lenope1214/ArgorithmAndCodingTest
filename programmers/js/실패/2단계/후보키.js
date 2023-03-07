/*
주소
https://programmers.co.kr/learn/courses/30/lessons/42890

문제 설명


*/

let now = [];
const reset = () => (now = []);
const isUnique = () => {
  return !!now[data] ? false : true;
};
// const checkMinimality = (data) => {};

function solution(relation) {
  const candidates = [];
  const rowSize = relation.length;
  const columnSize = relation[0].length;
  console.log("rowSize :", rowSize);
  console.log("columnSize :", columnSize);

  for (let c = 0; c < columnSize; c++) {
    const column = relation[c];
    //컬럼 숫자만큼 반복.
    // 1개 2개 3개 이런식으로 검색... 유일성, 최소성 조건에 맞으면 후보키에 추가 후 continue\
    for (let r = 0; r < rowSize; r++) {
      const row = column[r];
      if (isUnique(row)) {
        now.push(row);
      } else {
        continue;
      }
    }
    if (now.length === columnSize) {
      candidates.push();
    }
  }

  var answer = 0;
  return answer;
}

let ans;
ans = solution([
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
]); //2
console.log("ans :", ans);
