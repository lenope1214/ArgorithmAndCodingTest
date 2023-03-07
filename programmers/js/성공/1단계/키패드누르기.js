
const keypad = {
    left:
        [1, 4, 7, -1],
    middle:
        [2, 5, 8, 0],
    right:
        [3, 6, 9, -1]
}

let left = {
    number: -1,
    y: 3
};
let right =
{
    number: -1,
    y: 3
};


function solution(numbers, hand) {
    let answer = ''
    hand = hand === "right" ? "R" : "L"
    console.log('hand :', hand)
    numbers.forEach((number) => {
        console.log('----------------------------')
        console.log('number :', number)
        if (keypad.left.includes(number)) {
            left.number = number;
            left.y = keypad.left.indexOf(number)
            return answer += "L";
        } else if (keypad.right.includes(number)) {
            right.number = number;
            right.y = keypad.right.indexOf(number)
            return answer += "R"
        }





        middleIndex = keypad.middle.indexOf(number);
        console.log('middleIndex :', middleIndex)
        let leftDiff = Math.abs(left.y - middleIndex);
        let rightDiff = Math.abs(right.y - middleIndex);


        console.log('leftDiff :', leftDiff)
        console.log('rightDiff :', rightDiff)

        console.log('left.number : ', left.number)

        leftIndex = keypad.middle.indexOf(left.number)
        if (leftIndex == -1) leftDiff += 1;
        rightIndex = keypad.middle.indexOf(right.number)
        if (rightIndex == -1) rightDiff += 1;

        console.log('leftIndex :', leftIndex)
        console.log('rightIndex :', rightIndex)

        console.log()

        console.log('leftDiff :', leftDiff)
        console.log('rightDiff :', rightDiff)
        console.log('----------------------------')

        if (leftDiff === rightDiff) {
            if (hand === "L") {
                left.number = number;
                left.y = keypad.middle.indexOf(number)
            } else {
                right.number = number;
                right.y = keypad.middle.indexOf(number)
            }
            return answer += hand
        }
        else if (leftDiff < rightDiff) {
            left.number = number;
            left.y = keypad.middle.indexOf(number)
            return answer += "L"
        }
        else {
            right.number = number;
            right.y = keypad.middle.indexOf(number)
            return answer += "R"
        }


    });


    return answer;
}
// const res = solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right");
const res1 = solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left");
// console.log("res :", res);
console.log("res1 :", res1);