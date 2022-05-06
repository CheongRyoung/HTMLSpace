// 시스템 정보에 접근 할 수 있다.
// 디렉토리 경로 체크 cwd

process.version;
process.arch;
process.platform;
process.pid;
process.uptime();
process.execPath;
process.cwd();
process.cpuUsage();

// 환경변수들이 들어있는 객체
process.env

// 비밀키를 보관하는 용도로 쓰임
const secretId = process.env.SECRET_ID;
const secretCode = process.env.SECRET_CODE;

// 노드가 사용할 수 있는 메모리를 지정하는 옵션
NODE_OPTIONS='--max-old-space-size=8192'
UV_THREADPOOL_SIZE=8

// 이벤트 루프가 다른 콜백 함수보다 nextTick의 콜백 함수를 우선적 처리
// 너무 남용시 다른 콜백함수 실행 늦어짐
// = Promise
process.nextTick(()=> {
    console.log('nextTick');
});

// exit(1)은 에러가 있다는 것을 알리고 꺼짐
// 0은 그냥 꺼짐
process.exit()