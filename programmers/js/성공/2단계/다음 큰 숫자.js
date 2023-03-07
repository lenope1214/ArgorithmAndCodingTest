import { printResult } from '../common/index.js';

function solution(n) {
  var answer = 0;
  const MAX = 1000000;
  // const MAX = 25;

  const binaryN = n.toString(2).replaceAll('0', '').length;
  console.log('binaryN :', binaryN);

  for (let i = n + 1; i <= MAX; i++) {
    /**
     * @type {string}
     */
    const now = i.toString(2);
    const one = now.replaceAll('0', '').length;
    console.log('i - one :', i, one);
    if (binaryN === one) {
      answer = i;
      break;
    }
  }

  return answer;
}

printResult(solution(78), 83);
printResult(solution(15), 23);
