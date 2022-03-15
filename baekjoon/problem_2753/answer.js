// 2753번 문제 - https://www.acmicpc.net/problem/2753

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution(num){
  if (num % 4 === 0 && num % 100 !== 0 || num % 400 === 0) {
    console.log(1);
  } else {
    console.log(0);
  }
}

solution(+input[0]);