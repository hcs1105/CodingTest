// 1157번 문제 - https://www.acmicpc.net/problem/1157

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution(str){
  const obj = {};

  for(let i = 0; i < str.length; i++) {
    let nowChar = str[i].toUpperCase();

    /* console.log(nowChar); // M I S S I S S I P I */

    if(obj[nowChar]) {
      obj[nowChar]++;
    } else {
      obj[nowChar] = 1;
    }  
    /* console.log(obj[nowChar]); // 1 1 1 2 2 2 3 4 3 1 4 */
  }
  /* console.log(obj); // { M: 1, I: 4, S: 4, P: 1 } */

  let maxValue = -1;
  let maxChar = '';
  let isDuplicated = false;

  for(const el in obj) {
    if (obj[el] > maxValue) {
      maxValue = obj[el];
      maxChar = el;
      isDuplicated = false;
    } else if (obj[el] === maxValue) {
      isDuplicated = true;
    }
    /* console.log(obj[el]); // 1 4 4 1 */
    /* console.log(el); // M I S P */
  }
  
  if (isDuplicated) {
    console.log('?');
  } else {
    console.log(maxChar);
  }
}

solution(input[0]);