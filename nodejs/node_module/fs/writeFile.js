const fs = require('fs').promises;

//파일 쓰기
fs.writeFile('./write.txt', '글이 입력됩니다.')
    .then(() => {
        return fs.readFile('./write.txt');
    })
    .then(data => {
        console.log(data);
        console.log(data.toString());
    })
    .catch(err => {
        throw err;
    });


