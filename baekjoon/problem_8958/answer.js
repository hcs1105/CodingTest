// 8958번 문제 - https://www.acmicpc.net/problem/8958

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const arrayLength = input[0];
const items = input.slice(1);

function solution(arrayLength, items){
  for(let i = 0; i < arrayLength; i++) {
    const oxList = items[i];
    let oNum = 0;
    let score = 0;
    for(let j=0; j < oxList.length; j++) {
      const oxItem = oxList[j]; 
      if(oxItem === 'O') {
          oNum++;
          score += oNum;
      } else {
          oNum = 0;
      }
    }
    console.log(score);
  }
}

solution(arrayLength, items);