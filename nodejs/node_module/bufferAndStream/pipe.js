const fs = require('fs');
const zlib = require('zlib');  //압축

const readStream =fs.createReadStream('./readme.txt', {highWaterMark: 16});
const zlibStream = zlib.createGzip();
const writeStream =fs.createWriteStream('./writeme.txt');
readStream.pipe(writeStream)   //파일 복사 
readStream.pipe(zlibStream).pipe(writeStream) //압축 후 복사 

// 파이프끼리 연결 이때 스트립을 지원해야한다.