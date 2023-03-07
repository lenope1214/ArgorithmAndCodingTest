// X,O 의 갯 수가 정상적이지 않은 경우가 있을 수 있습니다.
// X,O 두 가지 모두 승리한 경우가 있을 수 있습니다.
// O 가 승리했는데 X 가 더 놓은 경우가 있을 수 있습니다.
// X 가 승리했는데 O 가 더 놓은 경우가 있을 수 있습니다. 위의 경우를 제외한 나머지 경우는 모두 정상적인 경우가 됩니다.

/*
아래는 정상인가? O
XO .
OXO
XOX

아래는 정상인가? O
OOO
XOX
XXO

- 1번 :  모든 if에서걸리지 않음
- 26번 : 모든 if에서걸리지 않음
- 45번 : 모든 if에서걸리지 않음
- 48번 : 모든 if에서걸리지 않음
 */

function solution(board) {
  console.log('board :', board);
  // 개수가 2개 이상 차이나면 X
  let oCount = 0;
  let xCount = 0;
  let oWin = false;
  let xWin = false;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 'O') oCount++;
      if (board[i][j] === 'X') xCount++;
    }
  }

  console.log('oCount :', oCount);
  console.log('xCount :', xCount);

  // 1. 개수 체크
  // 선공이 최대 1개 더 많아야 하고 후공은 최대 동일하다.
  if (oCount > xCount + 1 || xCount > oCount) return 0;

  // 2. 승리 체크
  // 선공이 승리했는지 후공이 승리했는지 체크
  // 선공이 승리했는데 후공이 더 많이 놓았다면 0
  // 후공이 승리했는데 선공이 더 많이 놓았다면 0

  // 각 o,x가 승리했는지 체크
  for (let i = 0; i < board.length; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      if (board[i][0] === 'O') oWin = true;
      if (board[i][0] === 'X') xWin = true;
    }
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      if (board[0][i] === 'O') oWin = true;
      if (board[0][i] === 'X') xWin = true;
    }
    // 좌상->우하 대각선 체크
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
      if (board[0][0] === 'O') oWin = true;
      if (board[0][0] === 'X') xWin = true;
    }
    // 좌하->우상 대각선 체크
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
      if (board[0][2] === 'O') oWin = true;
      if (board[0][2] === 'X') xWin = true;
    }
  }
  console.log('oWin :', oWin);
  console.log('xWin :', xWin);
  // 2. 둘 다 승리했을 경우
  if (oWin && xWin) return 0;

  // 3. O 가 승리했는데 X 가 더 놓은 경우
  if (oWin && xCount >= oCount) return 0;

  // 4. X 가 승리했는데 O 가 더 놓은 경우
  if (xWin && oCount >= xCount) return 0;

  return 1;
}

console.log('res :', solution(['.OX', 'OXO', 'XO.']));
// console.log('res :', solution(['OOO', 'X.X', '...']));

/*
["OOX", "XXO", "OXO"]     1
["XXX", "XXX", "XXX"]     0
["OOO", "OOO", "OOO"]     0
["OXO", ".XO", "X.O"]     1
["OOO", "X.X", "..."]     1
["OOO", "...", "..."]     0
["O..", "...", "..."]     1
[".O.", "...", "..."]     1
["..O", "...", "..."]     1
["...", "O..", "..."]     1
["...", ".O.", "..."]     1
["...", "..O", "..."]     1
["...", "...", "O.."]     1
["...", "...", ".O."]     1
["...", "...", "..O"]     1
["X..", "...", "..."]     0
[".X.", "...", "..."]     0
["..X", "...", "..."]     0
["...", "X..", "..."]     0
["...", ".X.", "..."]     0
["...", "..X", "..."]     0
["...", "...", "X.."]     0
["...", "...", ".X."]     0
["...", "...", "..X"]     0
["OX.", ".OX", "..O"]     1
["O..", ".O.", "..O"]     0
["X..", ".X.", "..X"]     0
["XO.", "XO.", "XO."]     0
["XO.", "...", "..."]     1
["OXO", "...", "..."]     1
["OXO", "X..", "..."]     1
["OXO", "XO.", "..."]     1
["OOO", "X.X", ".X."]     0
["OOO", "X.X", "XX."]     0
["XXX", "OO.", ".OO"]     0
["XO.", "OXO", "XOX"]     1
["OOO", "XOX", "XXO"]     1
["OOO", "OOX", "XXX"]     0
["XOX", "OXO", "XOX"]     0
["XXO", "OOX", "XO."]     1
["XXO", "OOX", "XOO"]     1
["X.X", ".X.", "X.X"]     0
[".X.", "X.X", ".X."]     0
["O.O", ".O.", "O.O"]     0
[".O.", "O.O", ".O."]     0
["OX.", "OXO", ".XO"]     0
["OX.", "OX.", ".XO"]     1
["OX.", "OXO", "XXO"]     1
["OX.", "...", "..."]     1
["...", "...", "OX."]     1
["OXO", "XOX", "OXO"]     1
["OOX", "XXO", "OOX"]     1
["XXX", ".OO", "O.."]     1
["OX.", ".O.", ".XO"]     1
["X.X", "X.O", "O.O"]     1
["XO.", "OXO", "XOX"]     1
["OOO", "XOX", "X.X"]     0
["XXX", "OO.", "OO."]     0
[".X.", "X..", ".O."]     0
["XXX", "XOO", "OOO"]     0
["OOX", "OXO", "XOO"]     0
["OOX", "OXO", "XOX"]     0
[".OX", "OXO", "XO."]     0
["OOO", "XX.", "X.."]     0
*/
