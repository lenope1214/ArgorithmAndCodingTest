/**
자연수 x를 y로 변환하려고 합니다. 사용할 수 있는 연산은 다음과 같습니다.

x에 n을 더합니다
x에 2를 곱합니다.
x에 3을 곱합니다.
자연수 x, y, n이 매개변수로 주어질 때, x를 y로 변환하기 위해 필요한 최소 연산 횟수를 return하도록 solution 함수를 완성해주세요. 이때 x를 y로 만들 수 없다면 -1을 return 해주세요.
 */

// 1. x+n
function myCalculator1(x, y, n) {
  // x + n을 진행 => y = x+n*depth
  // => y - x = n * depth
  // => depth = (y-x)/n
  const depth = (y - x) / n;
  if (depth % 1 == 0) return depth;
  else return -1;
}

// 2. x*2
function myCalculator2(num) {
  // x * 2^depth = y
  // => depth = log2(y/x)
  const depth = Math.log2(y / x);
  if (depth % 1 == 0) return depth;
  else return -1;
}

// 3. x*3
function myCalculator3(num) {
  // x * 3^depth = y
  // => depth = log3(y/x)
  let cY = y;
  let count = 1;
  while (cY > x) {
    cY /= 3;
    count++;
  }
  // console.log('x :', x, 'cY :', cY, 'count :', count);
  if (x % 3 == 0) count--;
  if (cY == x) return count;
  else return -1;
}

function solution(x, y, n) {
  if (x == y) return 0;
  let count = 0;
  let plus = x;
  let two = x;
  let three = x;

  console.log('x :', x, 'y :', y, 'n :', n);
  while (++count < 1000000) {
    // console.log('plus :', plus, 'two :', two, 'three :', three);
    if (plus < y) {
      plus = plus + n;
    }
    if (two < y) {
      two = two * 2;
    }
    if (three < y) {
      three = three * 3;
    }
    if (plus == y || two == y || three == y) {
      console.log(
        'is correct !!',
        'count :',
        count,
        plus == y ? plus : '',
        two == y ? two : '',
        three == y ? three : '',
      );
      return count;
    }
    if (plus > y && two > y && three > y) return -1;
  }
  return -1;
}

// 재귀함수로 완전탐색을 진행하고,
// 연산이 가능한 3가지 수를 모두 돌려보는 방식으로 해야할 듯.
// 각 연산결과를 재귀함수로 보내는데 이때 조건을 봐야 함.
// 1. 연산 결과가 y 초과일때
// 2. 연산 결과가 y와 동일할때
// 3. 연산 결과가 y 미만일때

console.log('\t\t\t\t\tsolution :', solution(2, 5, 4) == -1);
console.log('\t\t\t\t\tsolution :', solution(10, 40, 5) == 2);
console.log('\t\t\t\t\tsolution :', solution(5, 45, 1) == 2);
console.log('\t\t\t\t\tsolution :', solution(3, 81, 1) == 3);
console.log('\t\t\t\t\tsolution :', solution(2, 3, 2) == -1);
console.log('\t\t\t\t\tsolution :', solution(999999, 1000000, 1) == 1);
console.log('\t\t\t\t\tsolution :', solution(1, 1000000, 999999) == 1);
console.log('\t\t\t\t\tsolution :', solution(1, 1000000, 1) == 999999);
console.log('\t\t\t\t\tsolution :', solution(2, 524288, 1) == 18);
console.log('\t\t\t\t\tsolution :', solution(3, 531441, 1) == 11);
console.log('\t\t\t\t\tsolution :', solution(3, 531442, 1) == 531439);
console.log('\t\t\t\t\tsolution :', solution(3, 531442, 3) == -1);
console.log('\t\t\t\t\tsolution :', solution(3, 1000000, 3) == -1);
console.log('\t\t\t\t\tsolution :', solution(3, 166375, 3) == -1);
console.log('\t\t\t\t\tsolution :', solution(55, 166375, 55) == 3024);

// DB구조(테이블 정의서) 작성 => ERD
// 사용 화면, DB에 들어간 데이터 excel파일

/*
let x = 1;
let y = 2;
let n = 1;
function myCalculator1(num) {
  const depth = (y - x) / n;
  if (depth % 1 == 0) return depth;
  else return -1;
}
function myCalculator2(num) {
  const depth = Math.log2(y / x);
  if (depth % 1 == 0) return depth;
  else return -1;
}
function myCalculator3(num) {
  let cY = y;
  let count = 1;
  while (cY > x) {
    cY /= 3;
    count++;
  }
  if (x % 3 == 0) count--;
  if (cY == x) return count;
  else return -1;
}

function solution(_x, _y, _n) {
  if (_x == _y) return 0;
  let res1 = -1;
  let res2 = -1;
  let res3 = -1;
  x = _x;
  y = _y;
  n = _n;

  res1 = myCalculator1(x);
  res2 = myCalculator2(x);
  res3 = myCalculator3(x);

  const result =
    [res1, res2, res3].filter((v) => v > 0).sort((a, b) => a - b)[0] ?? -1;
  return result;
}
*/
