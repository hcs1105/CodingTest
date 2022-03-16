// 2562번 문제 - https://www.acmicpc.net/problem/2562

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const items = input.map(item => +item);

function solution(items){
  let maxValue = 0;
  let maxValueIndex = 0;

  for(let i = 0; i < items.length; i++) {
    let item = items[i];
    if(maxValue < item) {
      maxValue = item;
      maxValueIndex = i;
    }
  }
  console.log(maxValue);
  console.log(maxValueIndex + 1);
}

solution(items);