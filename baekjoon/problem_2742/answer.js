// 2742번 문제 - https://www.acmicpc.net/problem/2742

const fs = require('fs');;
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const inputNum = +input[0];
let answer = '';

for (let i = inputNum; i >= 1; i--) {
  answer += i + "\n";
}

console.log(answer);