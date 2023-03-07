function solution(n) {
  // 연속한 자연수들로 이루어져함.
  const set = new Set().add([n]);
  let acc;
  for (let i = 1; i < (n + 1) / 2; i++) {
    console.log('==i :', i);

    acc = 0;
    arr = [];
    for (let j = i; j < n; j++) {
      acc += j;
      if (acc === n) {
        set.add([i, j]);
        break;
      }

      if (acc > n) {
        break;
      }
    }
  }
  return set.size;
}

console.log(solution(15) === 4);
