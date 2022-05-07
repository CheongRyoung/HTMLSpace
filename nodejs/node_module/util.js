//  Util
// 각종 편의기능을 모아둔 모듈
// deprecated와 promisify가 자주쓰임

// 코드를 잘못만들었는데 쓰면 안된다고 알려줌
const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate( (x,y) => {
    console.log(x + y);  // 주요 동작을 deprecate로 감싸준다
}, 'dontUseMe 함수는 deprecated되었으니 더이상 사용하지 마세요!');

dontUseMe(1, 2);

// promisify는 콜백패턴을 프로미스 패턴으로 바꿔준다.
// 바꾸어두면 async/await 패턴까지 사용할 수 있다.
// 단, 콜백이 (error, data) => {} 형식이어야한다.
// 노드는 대부분 위 형식이여서 바꿀 수 있다.
const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
    .than( (buf) => {
        console.log(buf.toString('base64'))
    })
    .catch((error) => {
        console.log(error)
    })