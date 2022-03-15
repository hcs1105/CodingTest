// 10871번 문제 - https://www.acmicpc.net/problem/10871

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const [inputN, inputX] = input[0].split(' ').map(item => +item);
const arrayA = input[1].split(' ').map(item => +item);

/* 구조 분해 할당 문법을 풀어서 표현 
const inputArray = input[0].split(' ').map(item => +item);
const inputN = inputArray[0];
const inputX = inputArray[1];
console.log(inputArray);
console.log(inputN, inputX);
console.log(inputN);
console.log(inputX);
*/

function solution(N, X, A) {
  const answerArray = [];
  for(let i = 0; i < N; i++) {
    if(A[i] < X) {
      answerArray.push(A[i]);
    }
  }
  console.log(answerArray.join(' '));
}

solution(inputN, inputX, arrayA);