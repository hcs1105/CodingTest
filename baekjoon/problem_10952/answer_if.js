// 10952번 문제 - https://www.acmicpc.net/problem/10952

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];
for(let i = 0; ; i++){
  const testCaseValue = input[i].split(' ').map(item => +item);

  testCaseArray.push({
    A : testCaseValue[0],
    B : testCaseValue[1]
  });
  if(testCaseValue[0] === 0 && testCaseValue[1] === 0) {
    break;
  }
}

function solution(testCaseArray){
  for(let i = 0; ; i++) {
    const A = testCaseArray[i].A;
    const B = testCaseArray[i].B;

    // 구조 분해 할당 문법 : const {A, B} = testCaseArray[i];
    if(A == 0 && B == 0) {
      break;
    }

    console.log(A + B);
  }
}

solution(testCaseArray);