// 10951번 문제 - https://www.acmicpc.net/problem/10951

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArray = [];

for(let i = 0; i < input.length; i++){
  if(input[i] == '') {
    break;
  }
  const testCaseValue = input[i].split(' ').map(item => +item);

  testCaseArray.push({
    A : testCaseValue[0],
    B : testCaseValue[1]
  });
}

function solution(testCaseArray){
  let A = 0;
  let B = 0;
  let idx = 0;
  while(idx !== testCaseArray.length) {
    A = testCaseArray[idx].A;
    B = testCaseArray[idx].B;

    console.log(A + B);
    idx++;
  }
}

solution(testCaseArray);