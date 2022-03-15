// 2739번 문제 - https://www.acmicpc.net/problem/2739

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution(n){
  for(let i = 1; i <= 9; i++){
    console.log(`${n} * ${i} = ${n * i}`);
  }
}

solution(+input[0]);