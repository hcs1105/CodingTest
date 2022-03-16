// 1110번 문제 - https://www.acmicpc.net/problem/1110

const fs = require('fs');;
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

function solution(N){
  let makeNum = N; // 26
  let cycleLength = 0;

  while(makeNum !== N || cycleLength === 0) {
    let digitalTwo;
    let digitalOne;

    if(makeNum >= 10) {
      digitalTwo = +String(makeNum)[0]; // 2 6 8 4
      digitalOne = +String(makeNum)[1]; // 6 8 4 2
    } else {
      digitalTwo = 0;
      digitalOne = +String(makeNum)[0];
    }
    makeNum = digitalTwo + digitalOne; // 8 14 12 6
    
    let makeNumOne; // 8 4 2 6
    if(makeNum >= 10) {
      makeNumOne = +String(makeNum)[1]; 
    } else {
      makeNumOne = +String(makeNum)[0];
    }

    makeNum = +(String(digitalOne) + String(makeNumOne)); // 68 84 42 26
    // console.log('digitalTwo : ' + digitalTwo);
    // console.log('digitalOne : ' + digitalOne);
    // console.log('makeNum : ' + makeNum);
    // console.log('makeNumOne : ' + makeNumOne);

    cycleLength++; // 1 2 3 4
  }
  console.log(cycleLength);
}

solution(+input[0]);