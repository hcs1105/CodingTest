// 2588번 문제 - https://www.acmicpc.net/problem/2588

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map(item => +item);

function solution(a,b){
  const charB = String(b);
  const digitalOne = +charB[2];
  const digitalTwo = +charB[1];
  const digitalThree = +charB[0];

  console.log(a * digitalOne);
  console.log(a * digitalTwo);
  console.log(a * digitalThree);
  console.log(a * b);
}

solution(input[0], input[1]);