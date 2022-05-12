const fs = require('fs');

//createReadStream은 기본 한번(버퍼조각)에 64Kbytes를 읽는다.  버퍼 범위를 highWaterMark를 통해 바꿀수 있다.
const readStream = fs.createReadStream('./readme.txt', {highWaterMark: 16});

const data = []
readStream.on('data', (chunk) => {
    data.push(chunk);
    console.log('data', chunk, chunk.length);
})
readStream.on('end', () => {
    console.log('end', Buffer.concat(data).toString());
})
readStream.on('error', (err) => {
    console.log('error', err);
})