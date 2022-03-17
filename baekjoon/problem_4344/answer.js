// 4344번 문제 - https://www.acmicpc.net/problem/4344

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const arrayLength = +input[0];
const inputArray = [];

for(let i = 1; i <= arrayLength; i++) {
  const arr = input[i].split(' ');
  inputArray.push({
    n : +arr[0],
    arr : arr.slice(1).map(item => +item)
  });
}

const items = input.map(item => +item);

function solution(arrayLength, inputArray){
  for(let j=0; j < arrayLength; j++) {
    const item = inputArray[j];
    let average = 0;
    for(let k = 0; k < item.n; k++) {
      average += item.arr[k];
    }
    average /= item.n;
    
    let averageExceedStudent = 0;
    for(let l = 0; l < item.n; l++) {
      if(average < item.arr[l]) {
        averageExceedStudent++;
      }
    }

    const answer = ((averageExceedStudent / item.n) * 100).toFixed(3) + '%';
    console.log(answer);
  }
}

solution(arrayLength, inputArray);