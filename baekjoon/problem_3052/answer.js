// 3052번 문제 - https://www.acmicpc.net/problem/3052

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const items = input.map(item => +item);

function solution(items){
  const remainderArray = new Array(42).fill(0); 

  for(let i = 0; i < items.length; i++) {
    const remainder = +items[i] % 42;
    remainderArray[remainder]++;
  }

  let otherRemainderNum = 0;
  for(let i = 0; i < remainderArray.length; i++) {
    if(remainderArray[i] !== 0) {
      otherRemainderNum++;
    }
  }
  console.log(otherRemainderNum);
}

solution(items);