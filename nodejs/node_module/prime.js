const min = 2;
let primes = []

// 싱글쓰레드 예시
function generatePrimes(start, range) {
    let isPrime = true;
    const end = start + range;
    for (let i=start; i<end; i++){
        for (let j=min; j<Math.sqrt(end); j++){
            if (i !== j && i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
        }
        isPrime = true
    }
}

// 멀티쓰레드 예시
const {Worker, isMainThread, parentPort, workerData} = require('worker_threads')
if (isMainThread) {
    const max = 10_000_000;
    const threadCount = 8
    const threads = new Set();
    const range = Math.ceil((max - min)/threadCount);
    let start = min;
    console.time('prime')
    // 워커들에게 일 분배
    // workerData에 값을 보낼 수 있다.
    for (let i=0; i<threadCount-1; i++){
        const wStart = start;
        threads.add(new Worker(__filename, {workerData: {start: wStart, range}}));
        start += range
    }
    threads.add(new Worker(__filename, {workerData: {start, range: range + ((max - min + 1)%threadCount)}}));
    
    // 워커들의 작업을 합쳐주는 작업
    for (let worker of threads) {
        worker.on('error', (err) => {
            throw err;
        });
        worker.on('message', (msg) => {
            primes = primes.concat(msg);
        });
        worker.on('exit', () => {
            threads.delete(worker);
            if (threads.size === 0) {
                console.timeEnd('prime');
                console.log(primes.length);
            }
        });
    }
} else {
    // 워커 작업단위
    generatePrimes(workerData.start, workerData.range);
    parentPort.postMessage(primes)
}