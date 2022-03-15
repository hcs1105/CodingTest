// 1330번 문제 - https://www.acmicpc.net/problem/1330

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0];
input = input.split(' ').map(item => +item);

function solution(a,b){
  if(a > b) {
    console.log('>');
  } else if (a < b) {
    console.log('<');
  } else if(a === b) {
    console.log('==');
  }
}

solution(input[0], input[1]);