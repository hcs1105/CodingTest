// 2577번 문제 - https://www.acmicpc.net/problem/2577

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const items = input.map(item => +item);

function solution(items){
  const sum = items[0] * items[1] * items[2];
  const stringSum = String(sum);

  const numArray = new Array(10).fill(0); // [0, 0, 0, 0, 0, 0, 0, 0]

  for(let i = 0; i < stringSum.length; i++) {
    const sumChar = +stringSum[i];
    numArray[sumChar]++;
  }

  /*
  console.log(sum);
  console.log(stringSum); // 17037300
  console.log(stringSum.length); // 8
  console.log(numArray); // [3, 1, 0, 2, 0, 0, 0, 2, 0, 0]
  */

  for(let i = 0; i < numArray.length; i++) {
    console.log(numArray[i]);
  }
}

solution(items);