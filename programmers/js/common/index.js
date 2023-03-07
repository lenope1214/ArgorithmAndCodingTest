export function printResult(solution, answer) {
  console.log('solution :', solution);
  console.log('answer :', answer);
  console.log(
    '\n\n==============================\n\tresult :',
    solution.toString() == answer.toString(),
    '\n==============================\n',
  );
}
