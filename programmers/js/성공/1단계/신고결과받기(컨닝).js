function solution(id_list, report, k) {
  let answer = [];
  id_list = Array.from(new Set(id_list));
  report = Array.from(new Set(report)); // 중복제거

  const user = {};

  id_list.forEach((id) => {
    return (user[id] = {
      report: [],
      reported: 0,
      isStoppedId: false,
    });
  });

  report.forEach((data) => {
    const [reportId, reportedId] = data.split(" ");

    user[reportId].report.push(reportedId);
    user[reportedId].reported += 1;

    if (user[reportedId].reported >= k) user[reportedId].isStoppedId = true;
  });

  const countSendMail = id_list.map((id) => {
    return user[id].report.filter((reportedId) => user[reportedId].isStoppedId)
      .length;
  });

  return countSendMail;
}

let answer;
answer = solution(
  //[2,1,1,0]
  ["muzi", "frodo", "apeach", "neo"],
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  2
);

console.log(answer);

answer = solution(
  //[0,0]
  ["con", "ryan"],
  ["ryan con", "ryan con", "ryan con", "ryan con"],
  3
);

console.log(answer);
