// 2675번 문제 - https://www.acmicpc.net/problem/2675

const fs = require('fs');
const filePath = process.platform === 'linux' ?  '/dev/stdin' : './data.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// console.log(input); // ['2', '3 ABC', '5 /HTP']

const rsArray = [];
for(let i = 1; i <= +input[0]; i++) {
  const inputRS = input[i];
  const splitedInputRS = inputRS.split(' ');

  // console.log(inputRS); // 3 ABC, 5 /HTP
  // console.log(splitedInputRS); // ['3', 'ABC'], ['5', '/HTP']

  rsArray.push({
    R : +splitedInputRS[0],
    S : splitedInputRS[1]
  });
}

// console.log(rsArray); // [{R: '3', S: 'ABC'}, {R: '5', S: '/HTP' }]

function solution(N, rsArray){
  for(let j = 0; j < N; j++) {
    let { R, S } = rsArray[j];

    /* 구조 분해 햘당
    let R = rsArray[j].R;
    let S = rsArray[j].S;
    */
    
    let P = '';
    for(let k = 0; k < S.length; k++) {
      for(let l = 0; l < R; l++) {
        P += S[k];
      }
    }
    console.log(P);
  }
}

solution(+input[0], rsArray);