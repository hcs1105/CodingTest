// 10818번 문제 - https://www.acmicpc.net/problem/10818

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
const arrayLength = +input[0];
const items = input[1].split(' ').map(item => +item);

function solution(arrayLength, items) {
  let minValue = 1000001;
  let maxValue = -1000001;

  for(let i = 0; i < arrayLength; i++) {
    let item = items[i];

    if (minValue > item) {
      minValue = item;
    } 
    if (maxValue < item) {
      maxValue = item;
    }
  }
  console.log(`${minValue} ${maxValue}`);
}

solution(arrayLength, items);