// 그럼 노드 멀티쓰레드가 비추면 다른 언어의 멀티쓰레드를 활용하는 방법
const {exec, spawn }= require('child_process');

// 파이썬 프로그램 호출 (이것좀 실행해줘..) 설치되어 있어야됨
// 멀티프로세스로 사용하면 더 효율적으로 쓸수 있다.
var process = spawn('python', ['test.py']);

process.stdout.on('data', function(data) {
    console.log(data.toString());
})
process.stderr.on('data', function(data) {
    console.error(data.toString())
})