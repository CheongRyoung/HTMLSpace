//단방향 암호화
// 암호화는 가능하지만 복호화는 불가능
// 대표적으로 해시기법이 있다. 해시는 복호화가 불가능(비밀번호)

// 해시 사용하기(md5, sha1, sha256, sha512)
// creatHash(알고리즘) , md5, sha1은 취약점이 발견됨
// update(문자열): 변환할 문자열을 넣어준다.
// digest(인코딩): 인코딩할 알고리즘을 넣어줍니다. base64(추), hex, latin1


const util = require('util');
const crypto = require('crypto');

// 해시 예제
console.log('base64:', crypto.createHash('sha512'), update('비밀번호'), digest('base64'));


const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, 'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!');
dontUseMe(1, 2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
  .then((buf) => {
    console.log(buf.toString('base64'));
  })
  .catch((error) => {
    console.error(error);
  });


// 이밖에도 pbkdf2나 bcrypt, scrypt 알고리즘도 있다
// node는 pbkdf2와 scrypt를 지원
// 지원하지 않아도 사용가능 9강 참고
// pbkdf2는 문자를 소금과 반복횟수를 넣어 해시알고리즘을 적용한다
// pbkdf2 예제
crypto.randomBytes(64, (err, buf) => {
    const salt = buf.toString('base64');
    console.log('salt:', salt);
    crypto.pbdkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key) => {
        console.log('password:', key.toString('base64'));
    })
})

// 대칭형 암호화(암호문 복호화 가능)  취약 키가 훔쳐질 가능성
// 프론트와 서버 관계에서 사용 불가, 프론트는 오픈된 환경이기 때문
// 예제
const algorithm = 'aes-256-cbc'
const key = 'abcd1234'
const iv = '123456789';

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('암호화할 문장', 'utf-8', 'base64');
result += cipher.final('base64');
console.log('암호화:', result)

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf-8');
result2 += decipher.final('utf-8');
console.log('복호화:', result2);