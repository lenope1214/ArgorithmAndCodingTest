/* 실패 */

function solution(id_list, report, k) {
  let answer = [];
  id_list = Array.from(new Set(id_list)); //중복제거
  report = Array.from(new Set(report));
  const idInfoList = id_list.map((id) => {
    //myReports = 내 이름이 앞에 있는지 확인 후 뒤에있는 신고대상들의 이름 가져옴
    const myReports = report
      .filter((rp) => {
        return rp.split(" ")[0] === id;
      })
      .map((rp) => rp.split(" ")[1]);
    // 내가 신고당한 수 가져옴
    const myReported = report.filter((rp) => {
      return rp.split(" ")[1] === id;
    }).length;
    return {
      id: id,
      reports: myReports,
      count: myReported,
    };
  });

  const targets = idInfoList.filter(({ count }) => count >= k);
  answer = idInfoList.map(
    ({
      reports, // 내가 신고한 아이디들
    }) => {
      const myTargets = targets.filter(({ id }) => reports.includes(id));
      return myTargets.length;
    }
  );

  return answer;
}

let answer;
answer = solution(
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
);

console.log(answer);

answer = solution(
  ["con", "ryan"],
  ["ryan con", "ryan con", "ryan con", "ryan con"],
  3
);

console.log(answer);
