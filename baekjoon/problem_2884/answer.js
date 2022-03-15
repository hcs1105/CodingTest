// 2884번 문제 - https://www.acmicpc.net/problem/2884

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map(item => +item);

function solution(h,m){
  m -= 45;
  if (m < 0) {
    m += 60;
    h -= 1;
  } 
  if (h < 0) {
    h = 23;
  }
  console.log(h,m);
}

solution(input[0], input[1]);