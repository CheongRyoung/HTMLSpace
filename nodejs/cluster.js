// 기본적으로 싱글쓰레드인 노드가 CPU코어를 모두 사용할 수 있게 해주는 모듈
/*
포트를 공유하는 노드프로세스를 여러개 둘수 있음
요청이 많이 들어왔을 때 병렬로 실행된 서버의 개수만큼 요청이 분산됨
서버에 무리가 덜 감
코어가 8개인 서버가 있을 대: 보통은 코어 하나만 사용
cluster로 코어 하나 당 노드 프로세스 하나를 배정가능
성능이 코어 수만큼 증가하진 않지만 개선됨
단점: 컴퓨터 자원(메모리, 세션 등)은 공유 못함
Redis등 별도 서버로 해결

worker_thread는 쓰레드를 여러개 만든다면
cluster는 프로세스를 여러개 만듬
*/
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if(cluster.isMaster) {
    console.log('master process ID: ' + process.pid);
    // cpu개수만큼 워커를 생성
    for(let i=0; i<numCPUs; i++) {
        cluster.fork();
    }
    // 워커가 종료되었을 때
    cluster.on('exit', (worker, code, signal) => {
        console.log(`${worker.process.pid}번 워커가 종료되었습니다.`)
        console.log('code', code, 'signal', signal);
        // 만약 에러가 발생해서 서버가 꺼지면 다시 살리도록 할 수 있게 한다.
        cluster.fork();
    });   
} else {
    // 워커프로세스에서 서버를 띄움, 하나의 포트에 서버를 프로세스만큼 띄우는 거 가능
    http.createServer((req, res) => {
        res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
        res.write('<h1>hello node!</h1>');
        res.end('<p>hello cluster</p>');
        setTimeout(() => {
            process.exit(1);
        }, 1000);
    }).listen(8086);

    console.log(`${process.pid}번 워커 실행`)
}