// 8393번 문제 - https://www.acmicpc.net/problem/8393

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution(n){
  let sum = 0;
  for(let i = 1; i <= n; i++){
    sum += i; // sum = sum + i 
  }
  console.log(sum);  
}

solution(+input[0]);