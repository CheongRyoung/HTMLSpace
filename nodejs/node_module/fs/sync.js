//fs는 동기함수를 제공하고 있다.
//블로킹과 논블로킹은 함수가 바로 return되는지 여부로 분리할 수 있다.
//아래 예제는 return을 통해 블로킹을 구현, 동기로 작동되는 예제이다.
//동기는 비효율적이다 왜냐하면 기다려야하기 때문에 그래서 서버작업전 서버 초기화 작업등 사용
//서버가 실행된 후에는 사용자가 많으니 비동기로 작업해야한다.

const fs = require('fs');

let data = fs.readFileSync('./readme.txt');
console.log('1번',data.toString());
 data = fs.readFileSync('./readme.txt');
console.log('2번',data.toString());
 data = fs.readFileSync('./readme.txt');
console.log('3번',data.toString());
 data = fs.readFileSync('./readme.txt');
console.log('4번',data.toString());
