let types = [];

// console.log('answer :', solution(['DIA', 'RUBY', 'RUBY', 'DIA', 'DIA', 'EMERALD', 'SAPPHIRE', 'DIA']))

console.log('answer :', solution(['ZZZ', 'YYY', 'NNNN', 'YYY', 'BBB']));

function solution(gems) {
  let answer = [1, gems.length];
  const gemTypes = new Set(gems);
  const count = gemTypes.size;

  // 순서를 추적하기 쉽도록 Object대신 Map으로 생성
  const gemInfo = new Map();

  // 모든 보석을 순회한다.
  gems.forEach((gem, i) => {
    // 기존에 존재하는 동일한 보석 정보 삭제
    gemInfo.delete(gem);
    // 새로운 번호 대입
    gemInfo.set(gem, i);

    // 만약 모든 종류가 존재한다면,
    if (count === gemInfo.size) {
      // values로 interate 가져온 뒤 .next()로 제일 첫 번째 요소로 넘기고 가중치를 가져옴.
      const min = gemInfo.values().next().value;
      const max = i; // 현재 인덱스
      console.log('max :', max);
      console.log('min :', min);
      console.log('max - min :', max - min);
      console.log('answer[1] - answer[0] :', answer[1] - answer[0]);
      if (max - min < answer[1] - answer[0]) {
        answer = [min + 1, max + 1];
      }
    }
  });

  return answer;
}

// function solution(gems) {
//     let answer = [0, 1000000];
//
//     // 중복된 데이터는
//     // 가장 앞 번호를 기준으로 초기화한다.
//
//     // 1. 보석들의 종류를 구한다.
//     types = Array.from(new Set(gems))
//
//     // 모든 값을 순회하면서
//     // 참이 되는 리스트 중
//     // 가장 짧은 리스트를 구한다.
//
//     // 2. 모든 리스트를 순회한다
//
//     // 1번 풀이. 정확성 6개 효율성 0개 총 13.33점
//     // for (let i = 0; i < gems.length; i++) {
//     //     for (let j = i + 1; j < gems.length + 1; j++) {
//     //         const slice = gems.slice(i, j)
//     //         console.log('slice :', slice)
//     //         if(isCorrect(slice) && slice.length < answer[1] - answer[0]) {
//     //             answer = [i + 1, j]
//     //         }
//     //         console.log('answer :', answer)
//     //
//     //     }
//     // }
//
//     // 2번 풀이. 알고리즘을 검색 후 푼 문제
//     // 검색 한 알고리즘 : 이분탐색 알고리즘
//
//     return answer;
// }

// console.log('isCorrect("A") :', isCorrect('A'))
// function isCorrect(gems) {
//     console.log('gems :', gems)
//     console.log('types :', types)
//
//     // A 배열의 요소가 B 배열에 모두 포함되어 있는지 확인한다.
//     for (let i = 0; i < types.length; i++) {
//         if (gems.indexOf(types[i]) === -1) {
//             return false
//         }
//     }
//     return true
// }

// function solution(gems) {
//     let gemSet = new Set();
//     for (let gem of gems) {
//         if (!gemSet.has(gem)) {
//             gemSet.add(gem);
//         }
//     }
//     let kinds = gemSet.size;
//
//     let gemDict = { [gems[0]]: 1 };
//     let answer = [1, gems.length];
//     let left = 0; let right = 0;
//
//     // 이분탐색 while문
//     while (left <= right && right < gems.length) {
//
//         // range에 포함된 값이 모두 있는지 확인한다.
//
//         // 포함되어 있다면 모든 값이있는 케이스를 찾았으므로
//         // 기존 값과 비교
//         if (Object.keys(gemDict).length == kinds) {
//
//             // 현재 찾은 값의 길이가 기존에 찾은 값보다 짧으면 갱신
//             if (answer[1] - answer[0] > right - left) {
//                 answer = [left + 1, right + 1];
//             }
//
//             // 이분탐색의 left를 오른쪽으로 한 칸 옮긴다. ( 내리고 기존 값 줄이고 올리기 )
//             // 기존의 왼쪽 값을 하나 내리고 0(없음)이면 제거한다.
//             gemDict[gems[left]]--;
//             if (gemDict[gems[left]] == 0) {
//                 delete gemDict[gems[left]];
//             }
//
//             // 올리기
//             left++;
//
//             // 현재 처리할 값이 모든 종류를 포함하고 있지 않다면,
//         } else if (Object.keys(gemDict).length < kinds) {
//             // 비교 대상을 늘린다.
//             right++;
//
//             // 비교 대상이 더 이상 존재하지 않다면 종료.
//             if (right >= gems.length) {
//                 break;
//             }
//
//             // 현재 비교 대상이 존재하지 않다면 1로 생성해준다.
//             if (!gemDict[gems[right]]) {
//                 gemDict[gems[right]] = 1;
//             } else {
//                 // 비교 대상이 이미 존재한다면 1 증가시킨다.
//                 gemDict[gems[right]]++;
//             }
//         }
//     }
//     return answer;
// }

// 슬라이딩 윈도우 ??
// function solution(gems) {
//     const cnt = new Set(gems).size;
//     const gemMap = new Map();
//     var answer = [1, gems.length];
//     gems.forEach((gem, i) => {
//         gemMap.delete(gem);
//         gemMap.set(gem, i);
//         if (gemMap.size === cnt){
//             const cand = [gemMap.values().next().value + 1, i + 1];
//             answer = answer[1] - answer[0] > cand[1] - cand[0] ? cand : answer;
//         }
//     })
//     return answer;
// }
