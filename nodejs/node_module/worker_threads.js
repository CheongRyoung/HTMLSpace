// 노드에서 멀티스레드 방식으로 작업할 수 있다.
// worker_threads는 주가 되어서는 안된다. 
// cpu많이 쓰는 암호화난 압축을 직접 구현할 때만 사용
// 대부분은 싱글쓰레드를 사용하자
// 좀 복잡하다.

// 처음에는 메인쓰레드 실행 안에서 워커쓰레드를 생성해서 일을 분배를 하면
// 워커쓰레드들이 작업을 완료하면 일을 합쳐서 작업을 완료처리
const {Worker, parentPort, isMainThread, workerData} = require('worker_threads');

if(isMainThread) { // 메인쓰레드
    const threads = new Set();
    threads.add(new Worker(__filename, {
        workerData: {start: 1},
    }));
    threads.add(new Worker(__filename, {
        workerData: {start: 2},
    }));
    for(let worker of threads) {
        worker.postMessage('ping');
        worker.on('message', (value) => console.log('워커로부터', value))
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0 ) {
                console.log('워커 끝~');
            }
        });
    }
} else { // 워커쓰레드
    const data = workerData;
    parentPort.postMessage(data.start+1)
    parentPort.on('message', (value) => {
        console.log('부모로부터', value);
        parentPort.postMessage('pong');
        parentPort.close();
    })
}

// 대표예제 소수찾기
