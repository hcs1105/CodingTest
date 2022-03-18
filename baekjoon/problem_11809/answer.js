// 11809번 문제 - https://www.acmicpc.net/problem/11809

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(s){
  // 알파벳 소문자 26개
  // 길이가 26개인 배열 : answerArray, 배열의 0번째 원소 : a, 배열의 1번째 원소 : b 
  // a의 ASCII : 97-97 = 0
  // b의 ASCII : 98-97 = 1

  const answerArray = new Array(26).fill(-1);

  for(let i = 0; i < s.length; i++) {
    let nowChar = s[i];
    let answerArrayIndex = nowChar.charCodeAt() - 97;

    if(answerArray[answerArrayIndex] === -1) {
      answerArray[answerArrayIndex] = i;
    }
  }

  for(let j = 0; j < answerArray.length; j++) {
    process.stdout.write(answerArray[j] + ' ');
  }

  /*
  let answer = '';
  for(let j = 0; j < answerArray.length; j++) {
    answer += answerArray[j] + ' ';
  }
  console.log(answer);
  */
}

solution(input[0]);