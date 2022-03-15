// 14681번 문제 - https://www.acmicpc.net/problem/14681

/* 런타임 에러가 발생하여 주석 처리
const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map(item => +item);
*/

const readline = require('readline');
const rl = readline.createInterface({
  input : process.stdin,
  output : process.stdout
});

let input = [];

rl.on('line', function(line){
  input.push(line);
}).on('close', function(){
  input = input.map(item => +item);
  solution(input[0], input[1]);
  process.exit();
});

function solution(x,y){
  let quadrant = 0;
  if (x > 0 && y > 0) {
    quadrant = 1;
  } else if (x < 0 && y > 0) {
    quadrant = 2;
  } else if (x < 0 && y < 0) {
    quadrant = 3;
  } else if (x > 0 && y < 0) {
    quadrant = 4;
  }
  console.log(quadrant);
}

