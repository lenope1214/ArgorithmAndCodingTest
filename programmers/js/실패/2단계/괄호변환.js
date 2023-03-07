/*
주소


문제 설명


*/

const 올바른괄호확인 = (s) => {
  const open = [];
  for (i = 0; i < s.length; i++) {
    if (s[i] === "(") open.push(true);
    else {
      if (open.length > 0) {
        open.pop();
      } else {
        return false;
      }
    }
  }
  return true;
};

const 균형인덱스 = (s) => {
  let left = 0;
  let right = 0;
  let i = 0;
  for (i = 0; i < s.length; i++) {
    if (s[i] === "(") left++;
    else right++;

    if (left === right) {
      break;
    }
  }
  return i;
};

const recursive = (s) => {
  if (!!!s) return "";
  console.log("recursive :", s);
  const index = 균형인덱스(s);
  console.log("index :", index);
  const u = s.substring(0, index + 1);
  const v = s.substring(index + 1);
  console.log("u :", u);
  console.log("v :", v);
  if (올바른괄호확인(u)) {
    console.log("AAAAAAAAAAAAAA :", u);
    // u가 올바른 괄호 문자열 이라면 v에대해 재귀 후 u+v
    return u + recursive(v);
  } else {
    console.log("BBBBBBBBBBBBBB :", v);
    // u가 올바른 괄호 문자열이 아니라면
    //  1. '('
    //  2. u 첫번째 마지막 제외 값 뒤집기. + ')'
    //  3. v에 대해 재귀해서 2에 더하기
    let reverse = s
      .substring(1, u.length - 1)
      .split("")
      .map((괄호) => (괄호 === "(" ? ")" : "("))
      .join("");
    console.log("reverse :", reverse);
    return "(" + reverse + ")" + recursive(v);
    // return recursive(u) + recursive(v);
  }
};

function solution(s) {
  // 1. 올바른 괄호 문자열인지 확인
  // 2. u v로 분리,
  // 3. 각 u, v에 대해서 재귀진행 후 u+v

  const ok = 올바른괄호확인(s);
  if (ok) return s;

  // return u + v;
  return recursive(s);
}

let ans;
// ans = solution("(()())()"); //"(()())()"
// console.log("ans :", ans);

// ans = solution(")("); //"()"
// console.log("ans :", ans);

ans = solution("()))((()"); //"()(())()"
console.log("ans :", ans);
