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
  let A = testCaseArray[0].A;
  let B = testCaseArray[0].B;
  let idx = 1;
  while(A !== 0 && B !==0) {
    console.log(A + B);
    
    A = testCaseArray[idx].A;
    B = testCaseArray[idx].B;

    idx++;
  }
}

solution(testCaseArray);