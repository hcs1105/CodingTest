// 1065번 문제 - https://www.acmicpc.net/problem/1065

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function f(num){
  const strNum = String(num);

  if(strNum.length <= 2) {
    return true;
  }

  const differentNum = +strNum[1] - +strNum[0];
  let prevNum = +strNum[1];

  for(let i = 2; i < +strNum.length; i++) {
    if(strNum[i] - prevNum !== differentNum) {
      return false;
    } 
    prevNum = +strNum[i];
  }
  return true;
}

function solution(n){
  let cnt = 0;
  for(let j = 1; j <= n; j++) {
    if(f(j)) {
      cnt++;
    }
  }
  console.log(cnt);
}

solution(+input[0]);