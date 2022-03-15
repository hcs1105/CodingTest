// 2741번 문제 - https://www.acmicpc.net/problem/2741

const fs = require('fs');;
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const inputNum = +input[0];
let answer = '';

for (let i = 1; i <= inputNum; i++) {
    answer += i + "\n";
}

console.log(answer);