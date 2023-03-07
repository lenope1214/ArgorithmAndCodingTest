/**
 * 위 문제를 풀기 위해선 graph 그리는 방법, 플로이드-와샬
 *
 * 다익스트라 알고리즘과 플로이드-와샬 알고리즘의 차이점
 * 다익스트라 알고리즘 = 한 노드에서 각각의 노드까지의 최단거리를 구하는 것
 * 플로이드-와샬 알고리즘 = 모든 노드에서 각각의 노드까지의 최단거리를 구하는 것
 *
 * 모든 노드와 한 노드의 차이점!
 * https://ssabi.tistory.com/60
 *
 */

/**
 * 플로이드-와샬 알고리즘
 * 그래프에서 모든 꼭짓점 사이의 최단 경로의 거리를 구하는 알고리즘이다.
 *    ( 음수 가중치를 갖는 간선도 순환만 없다면 잘 처리된다. )
 *
 * 제일 바깥쪽 반복문은 거쳐가는 꼭짓점이고, 두 번째 반복문은 출발하는 꼭짓점, 세 번째 반복문은 도착하는 꼭짓점이다.
 *
 * - '모든 정점' 에서 '모든 정점' 으로의 최단 경로를 구하고 싶다면 플로이드 워셜 알고리즘 을 사용해야 한다.
 * - 핵심 아이디어는 '거쳐가는 정점' 을 기준을 최단 거리를 구하는 것이다.
 * - 기본적으로 다이나믹 프로그래밍(DP) 기술에 의거한다.
 * - 최단 경로를 찾기에 좋은 알고리즘이다.
 */

/**
 *
 * @param {*} n 지점개수, 3 이상 200 이하인 자연수
 * @param {*} s 지점, 1 이상 n 이하인 자연수,  s a b는 겹치지 않는다.
 * @param {*} a 지점, 1 이상 n 이하인 자연수,  s a b는 겹치지 않는다.
 * @param {*} b 지점, 1 이상 n 이하인 자연수,  s a b는 겹치지 않는다.
 * @param {*} fares 2차원 정수 배열, 크기는 2 이상 n * (n-1) / 2 이하  n이 6이라면 2~15
 * fares는 [c, d, f]형태로
 * c지점과 d지점 사이의 예상 택시요금이 f 원 이라는 뜻
 * c, d는 1 이상 n 이하인 자연수,
 * f는 1 이상 100,000 이하인 자연수
 * @returns
 */
function solution(n, s, a, b, fares) {
  let answer = 0;

  // {length: n+1}, ()=>Array(n+1) = index를 0부터 쓰는게 아닌 1부터 쓰기 위해 n+1로 설정,
  // fill(Infinity) = 계산에 필요없는 그래프의 빈 값은 가중치를 max로 올려 계산에 포함되지 않도록 함
  const graph = Array.from({ length: n + 1 }, () =>
    Array(n + 1).fill(Infinity),
  );

  // 자기 자신으로의 값은 0이므로 0으로 변경
  for (let i = 1; i <= n; i++) graph[i][i] = 0;

  // 주어진 fares 경로 배열을 이용하여 graph 초기화
  for (let [a, b, c] of fares) {
    graph[a][b] = c;
    graph[b][a] = c;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        graph[i][j] = Math.min(graph[i][j], graph[i][k] + graph[k][j]);
      }
    }
  }

  answer = graph[s][a] + graph[s][b];
  for (let i = 1; i <= n; i++) {
    // i 는 각 노드이므로
    // [s][i] => 시작지점부터 각 노드로의 최소비용
    // [i][a] => 노드로부터 a목적지 까지의 최소비용
    // [i][b] => 노드로부터 b목적지 까지의 최소비용

    // 위 세 값을 모두 더해서 최소인 값이 최소비용이 된다.
    const shortest = graph[s][i] + graph[i][a] + graph[i][b];
    answer = Math.min(answer, shortest);
  }
  return answer;
}

const inout001 = solution(6, 4, 6, 2, [
  [4, 1, 10],
  [3, 5, 24],
  [5, 6, 2],
  [3, 1, 41],
  [5, 1, 24],
  [4, 6, 50],
  [2, 4, 66],
  [2, 3, 22],
  [1, 6, 25],
]);
console.log(inout001, 82, '정답인가?', inout001 == 82);
