// 예외처리
// 자바스크립트는 에러와 예외를 구분하지는 않는다.
// 예외는 처리하지 못한 에러이다.
// 예외가 중요한 이유는 발생되면 노드 쓰래드가 멈추는데 노드는 기본적으로 싱글쓰레드여서 스레드가 멈추면 프로세스가 멈추기 때문...

// 기본적으로 try ~ catch
// 모든 코드에 감쌀수 있지만 이를 구분할 수 있어야한다.
setInterval(()=>{
    console.log('시작');
    try {
        throw new Error('서버를 고장내주마!');
    } catch (err) {
        console.error(err);
    }
}, 1000);

// 노드는 콜백함수에서 에러객체를 제공함
let fs = require('fs');

setInterval(()=> {
    fs.unlink('./abcdefg.js', (err)=> {
        if(err) {
            console.error(err);
        }
    })
}, 1000);

fs = require('fs').promises;

setInterval(() => {
    fs.unlink('./abc.js')
        .then()
        .catch((err) => {
            console.error(err)
        })
}, 1000)