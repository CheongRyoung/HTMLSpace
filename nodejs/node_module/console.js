// path는 자주쓰임 경로처리(운영체제별 차이 해결)를 위해서
console.log(path.join(__dirname, 'var.js')); //경로 합치기
console.log(path.join(__dirname, '..','var.js')); // 부모디렉토리에 join

console.log(path.resolve(__dirname, '..', '/var.js')); //  '/'절대경로

// path에서 할 수 있는것
// 파일명, 확장자, 경로
// path 메소드 파라미터에 filename 혹은 dirname을 사용
const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimiter:', path.delimiter);
console.log('------------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.basename():', path.basename(string));
console.log('path.basename - extname:', path.basename(string, path.extname(string)));
console.log('------------------------------');
console.log('path.parse()', path.parse(string));
console.log('path.format():', path.format({
  dir: 'C:\\users\\zerocho',
  name: 'path',
  ext: '.js',
}));
console.log('path.normalize():', path.normalize('C://users\\\\zerocho\\\path.js'));
console.log('------------------------------');
console.log('path.isAbsolute(C:\\):', path.isAbsolute('C:\\'));
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));
console.log('------------------------------');
console.log('path.relative():', path.relative('C:\\users\\zerocho\\path.js', 'C:\\'));
console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/zerocho'));
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/zerocho'));
//POSIX냐 맥이냐