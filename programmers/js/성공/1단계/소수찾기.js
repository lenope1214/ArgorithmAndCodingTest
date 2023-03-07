/*
주소


문제 설명


*/

function solution(n) {
  const primes = [2];

  console.log("Math.sqrt(n) :", Math.sqrt(n));
  for (let i = 3; i <= n; i += 2) {
    console.log("i :", i);
    let flag = true;
    for (let j = 0; primes[j] <= Math.sqrt(n); j++) {
      console.log("primes[i] :", primes[j]);
      if (i % primes[j] === 0) {
        flag = false;
        break;
      }
    }
    if (flag) primes.push(i);
  }

  console.log("primes :", primes);
  return primes.length;
}
let ans;

ans = solution(2);
console.log("ans :", ans);
