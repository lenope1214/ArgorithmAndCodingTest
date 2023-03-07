// 3레벨
//https://school.programmers.co.kr/learn/courses/30/lessons/138475
import { printResult } from '../common/index.js';

/**
 *
 * @param {number} e
 * @param {number[]} starts
 * @returns
 */
function solution(e, starts) {
  // 구구단 결과가 e 이하인 값을 찾아야 하는 문제..
  // 최소공배수? 공약수? 를 사용해야 좋을 것 같아보인다.
  // ---------------------------------------------------------
  // var answer = [];
  // for (let i = 0; i < starts.length; i++) {
  //   const map = new Map();
  //   for (let j = starts[i]; j <= e; j++) {
  //     for (let k = 1; k <= e; k++) {
  //       const value = j * k;
  //       console.log(j, '*', k, '= value :', value);
  //       if (!map.get(value)) map.set(value, 1);
  //       else {
  //         map.set(value, map.get(value) + 1);
  //       }
  //     }
  //   }
  //   // map안의 요소 출력
  //   let max = [0, 0];
  //   const entires = map.entries();
  //   for (let i = entires.next(); i.value; i = entires.next()) {
  //     // console.log('i :', i);
  //     const key = i.value[0];
  //     const value = i.value[1];
  //     console.log('key', key, '- value :', value);
  //     if (max[1] < value) {
  //       max = [key, value];
  //     }
  //   }
  //   answer.push(max[0]);
  // }
  // return answer;
}

printResult(solution(8, [1, 3, 7]), [6, 6, 8]);
