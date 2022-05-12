//메모리효율적 
//왜냐하면 버퍼같은 경우는 메모리에 올려서 보내지만
//스트림 64kbytes로 나눠서 보내기 때문에

const fs = require('fs');

const writeStream = fs.createWriteStream('./write.txt');
writeStream.on('finish', ()=>{
    console.log('파일쓰기완료');
});

writeStream.write('이 글을 씁니다. \n');
writeStream.write('한 번 더 씁니다. \n');
writeStream.end();