// promise와 call back은 비동기 방식으로 순서대로 실행이 되지 않는다.
const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log('1번', data.toString());
})
fs.readFile('./readme.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log('2번', data.toString());
})
fs.readFile('./readme.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log('3번', data.toString());
})
fs.readFile('./readme.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log('4번', data.toString());
})

// 예상결과 - 콜백을 백그라운드로 넘어가면서 콜백들이 동시에 실행이되서 운영체제에서 먼저끝나는 것들을 태스크큐로 보내줘서 뭐가 먼저 끝날지 모름
// 4번 안녕하세요
// 2번 안녕하세요
// 1번 안녕하세요
// 3번 안녕하세요