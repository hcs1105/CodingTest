// 10998번 문제 - https://www.acmicpc.net/problem/10998

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map(item => +item);

function solution(a,b){
  console.log(a * b);
}

solution(input[0], input[1]);