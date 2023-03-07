/*
주소
https://programmers.co.kr/learn/courses/30/lessons/42840

(완전 탐색)

문제 설명
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.

제한 조건
시험은 최대 10,000 문제로 구성되어있습니다.
문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
입출력 예
answers	return
[1,2,3,4,5]	[1]
[1,3,2,4,2]	[1,2,3]
입출력 예 설명
입출력 예 #1

수포자 1은 모든 문제를 맞혔습니다.
수포자 2는 모든 문제를 틀렸습니다.
수포자 3은 모든 문제를 틀렸습니다.
따라서 가장 문제를 많이 맞힌 사람은 수포자 1입니다.

입출력 예 #2

모든 사람이 2문제씩을 맞췄습니다.

*/

const picks = {
  a: [1, 2, 3, 4, 5], // 1 4
  b: [1, 3, 4, 5], // 2 2
  c: [3, 1, 2, 4, 5], // 3 2
};

function solution(answers) {
  var answer = [];

  const aPlusOne = () => {
    console.log("=============== a");
    counts.a = counts.a + 1;
  };

  const bPlusOne = () => {
    console.log("=============== b");
    counts.b = counts.b + 1;
  };

  const cPlusOne = () => {
    console.log("=============== c");
    counts.c = counts.c + 1;
  };

  const counts = {
    a: 0,
    b: 0,
    c: 0,
  };

  for (let i = 0; i < answers.length; i++) {
    const answer = answers[i];
    const a = picks.a[i % 5];
    const bIndex = Math.trunc(i / 2) % 4;
    const b = i % 2 === 0 ? 2 : picks.b[bIndex];
    const cIndex = Math.trunc(i / 2) % 5;
    const c = picks.c[cIndex];
    console.log("answer :", answer);
    console.log("a :", a);
    console.log("b :", b);
    console.log("c :", c);

    // a
    if (answer === a) aPlusOne();

    // b
    if (i % 2 === 0) {
      // 짝수번째면 얘는 2를 찍어.
      if (answer === 2) bPlusOne();
    } else {
      // 홀수 번째면 picks.b[i]와 비교
      if (answer === b) bPlusOne();
    }

    // c
    if (answer === c) cPlusOne();
  }

  let max = counts.a;

  if (counts.b >= max && counts.b >= counts.c) {
    max = counts.b;
  } else if (counts.c >= max && counts.c >= counts.b) {
    max = counts.c;
  }

  if (counts.a === max) {
    answer.push(1);
  }

  if (counts.b === max) {
    answer.push(2);
  }

  if (counts.c === max) {
    answer.push(3);
  }

  console.log("counts :", counts);
  return answer;
}

let ans;

// ans = solution([1, 2, 3, 4, 5]);
// console.log("ans :", ans);

// ans = solution([1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
// ans = solution([2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5]);
ans = solution([
  1, 2, 3, 4, 2, 1, 2, 3, 2, 4, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 2, 1, 2, 3, 2, 4,
  2, 5, 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 4, 5, 1,
]);
console.log("ans :", ans);
