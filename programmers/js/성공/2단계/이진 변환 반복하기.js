import { printResult } from '../common/index.js';

/**
 *
 * @param {string} s
 * @returns {string[]} result
 */
function solution(s) {
  var answer = [];

  let str = s;

  // 1. 문자열의 0을 지운다.
  // 2. 지운 문자열의 길이만큼 2진수로 변환한다.
  // 3. 변환한 2진수가 1이 될 때까지 1,2를 반복한다.

  // for (let i = 0; i < 99; i++) {
  //   str = str.replaceAll('0', '');
  //   console.log('str :', str);

  //   str = Number(str.length).toString(2);
  //   console.log('str :', str);
  // }
  let count = 0;
  let removed = 0;
  while (str !== '1') {
    count++;
    // 2번 풀이 마지막 5.36ms
    const oldStr = str;
    // 1번 풀이 마지막 3.3ms
    // removed += str.replaceAll('1', '').length;

    str = str.replaceAll('0', '');
    removed += oldStr.length - str.length;
    // 0이 지워진 개수는??
    console.log('str :', str);
    str = Number(str.length).toString(2);
    console.log('str :', str);
  }

  console.log('[count, removed] :', [count, removed]);
  return [count, removed];
}

printResult(solution('110010101001'), [3, 8]);
