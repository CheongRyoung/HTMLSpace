// 파일시스템 모듈 선언  fs는 promise로 만들어 달라는 요청이 많아 뒤에 .promises를 주면 프로미스로 사용가능 혹은 util의 promisify로 감싸주면 된다.
const fs = require('fs').promises;

// 파일 읽기
fs.readFile('./readme.txt')
    .than( data => {
        console.log(data);
        console.log(data.toString());
    })
    .catch( err => {
        throw err;
    })



