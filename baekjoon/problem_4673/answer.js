// 4673번 문제 - https://www.acmicpc.net/problem/4673

function d(num) {
  let sum = 0;
  const strNum = String(num);

  for (let i = 0; i < strNum.length; i++) {
      sum += +strNum[i];
  }
  return num + sum;
}

function solution() {
  const arr = new Array(10000).fill(0);
  
  for (let j = 0; j < 10000; j++) {
    const selfNum = d(j);
      
    if (selfNum <= 10000) {
      arr[selfNum]++;
    }
  }
  
  for (let k = 0; k < 10000; k++) {
    if (arr[k] === 0) {
      console.log(k);
    }
  }
}

solution();