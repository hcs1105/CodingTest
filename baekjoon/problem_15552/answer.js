// 15552번 문제 - https://www.acmicpc.net/problem/15552

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const inputNum = Number(input[0]);
let sum = '';

for(let i = 1; i <= inputNum; i++) {
  let data = input[i].split(' ');
  sum += Number(data[0]) + Number(data[1]) + '\n';
}

console.log(sum);