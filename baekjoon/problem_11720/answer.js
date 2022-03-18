// 11720번 문제 - https://www.acmicpc.net/problem/11720

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(N, numbers){
  let sum = 0;

  for(let i = 0; i < numbers.length; i++) {
    sum += +numbers[i];
  }
  console.log(sum);
}

solution(input[0], input[1]);