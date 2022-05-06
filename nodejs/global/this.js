global.console.log(this == global); // global  false
console.log(this === module.exports) // true

function a() {
    console.log(this === global);  // true
}
a();

// function 마다 this가 새로 생기는 것
// 화살표 함수는 부모의 this를 가져오는 것
// 전역스코프의 this는 module.exports