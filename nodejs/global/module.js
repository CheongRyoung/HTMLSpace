// module.exports = {}
// const aa = require('경로');

// exports.odd = odd
// exports.even = even

// 위와 같음
// module.exports = {odd, even}

// 단, 새로이 module.exports에 function을 넣게 되면 참조관계가 깨짐
// exports.aa = aa를 사용하면 계속 같은 방식으로 넣어야함
// module.exports = {} 새로 선언하면 깨짐(주소가 다름)