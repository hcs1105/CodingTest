// 2438번 문제 - https://www.acmicpc.net/problem/2438

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution(n){
  for(let i = 1; i <= n; i++){
    console.log('*'.repeat(i)); 
  }
}

solution(+input[0]);