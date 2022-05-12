//순서를 지키면서 비동기작업하는 법 async function을 활용
const fs = require('fs');

async function main() {
    let data = fs.readFileSync('./readme.txt');
    console.log('1번', data.toString());
    data = fs.readFileSync('./readme.txt');
    console.log('2번', data.toString());
    data = fs.readFileSync('./readme.txt');
    console.log('3번', data.toString());
}
main();