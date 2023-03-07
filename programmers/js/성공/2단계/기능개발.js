function solution(progresses, speeds) {
  var answer = [];
  const days = progresses.map((progress, index) => {
    let less = 100 - progress;
    const day = Math.ceil(less / speeds[index]); // 올림으로 근사값 처리
    return day;
  });

  let index = 0;

  for (; index < progresses.length; ) {
    let count = 0;
    const now = days[index];

    while (true) {
      const target = days[index];
      if (target <= now) {
        // 2.3이 7보다이상 ,
        count++;
        index++;
      } else {
        answer = [...answer, count];
        break;
      }
    }
  }
  return answer;
}

const answer = solution([1, 2, 3], [100, 1, 1]);

console.log("answer :", answer);
