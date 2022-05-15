const http = require('http');

// 악성 여부를 검사해서 응답을 거부할 수도 있다.
// 에러처리 필수
// 서버는 항상 수정 되었으면 껏따 켜야 반영된다.
//     단, fs watch를 통해서 파일이 변경을 감지하고 자동으로 재시작을 설정할 수 있다.
const server = http.createServer((req, res) => {
    // 사파리는 write()문이 html인지 문자열인지 구분을 하지 못하기 때문에
    // heade를 설정해서 같이 보내준다.
    res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'})
    res.write('<h1>Hello node</h1>');
    res.write('<p>Hello node</p>');
    res.end('<p>hello zerocho</p>')
})
    .listen(8080);
server.on('error', (err) => {
    console.log(err);
})
server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기중입니다.');
})

