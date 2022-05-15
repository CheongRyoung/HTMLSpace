// html파일로 응답하는 서버

const http = require('http');
const fs = require('fs');

const server = http.createServer(async (req, res) => {
    try {
        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8;'})
        const data = await fs.readFile('./temp.html');
        res.end(data);
    } catch(error) {
        console.log(err);
        // text/plain은 일반문자열임을 알려줌
        res.writeHead(200, {'Content-type': 'text/plain; charset=utf-8;'})
        res.end(err.message)
    }
})
    .listen(8080);
server.on("listening", () => {
    console.log('서버가 실행되었습니다.')
})
server.on('error', (err) => {
    console.log(err);
})