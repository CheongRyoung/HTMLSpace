// 시간 뒤 실행
const timeout = setTimeout(()=> console.log('hi'), 2000)
clearTimeout(timeout)

// 인터벌 반복
const hello = setInterval(()=> console.log('hello'), 2000)

// 인터벌 종료(꼭 변수에 대입된 인터벌로 종료)
clearInterval(hello)

// 바로 실행  함수가 백그라운드로 넘어가서 특정 코드들을 거의 동시에 실행
const immedi = setImmediate(()=> console.log('hi'));
clearImmediate(immedi)