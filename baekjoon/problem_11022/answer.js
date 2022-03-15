// 11022번 문제 - https://www.acmicpc.net/problem/11022

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
for(let i = 1; i <= +input[0]; i++){
  const testCaseValue = input[i].split(' ').map(item => +item);

  testCaseArray.push({
    A : testCaseValue[0],
    B : testCaseValue[1]
  });
}

function solution(T, testCaseArray){
  for(let i = 0; i < T; i++) {
    const A = testCaseArray[i].A;
    const B = testCaseArray[i].B;

    // 구조 분해 할당 문법 : const {A, B} = testCaseArray[i];

    console.log(`Case #${i+1}: ${A} + ${B} = ${A+B}`);
  }
}

solution(+input[0], testCaseArray);