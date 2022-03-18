// 11654번 문제 - https://www.acmicpc.net/problem/11654

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution(char){
  console.log(char.charCodeAt());
}

solution(input[0]);