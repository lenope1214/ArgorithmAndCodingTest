import { printResult } from '../common/index.js';

////////////// 시간초과 풀이법 array만 사용하기엔 벅차보인다
// function solution(numbers) {
//   console.log(numbers);
//   let answer = [];
//   const set = new Set(numbers);
//   const find = (index) => {
//     const now = numbers[index];
//     const slice = new Set(numbers.slice(index + 1));
//     console.log('now :', now, 'slice :', slice);
//     const keys = slice.keys();
//     for (let i = keys.next().value; i; i = keys.next().value) {
//       console.log(i);
//       if (i > now) return i;
//     }
//     return -1;
//   };
//   numbers.forEach((n, index) => {
//     answer.push(find(index));
//   });
//   console.log('answer :', answer);

//   return answer;
// }

/**
 *
 * @param {number[]} numbers
 * @returns
 */
function solution(numbers) {
  console.log('numbers :', numbers);
  console.log();
  for (let i = 0; i < numbers; i++) {
    const now = numbers.shift();
  }
  const answer = [-1];
  // let index = numbers.length - 2;
  // console.log('index :', index);
  // console.log('numbers[index] :', numbers[index]);

  // console.log('answer :', answer);
  return answer;
}

console.log(
  '\n\n==============================\n\tresult :',
  solution([2, 3, 3, 5, 3]) === [3, 5, 5 - 1, -1],
  '\n==============================\n',
);

printResult(solution([9, 1, 5, 3, 6, 2]), [-1, 5, 6, 6, -1, -1]);
