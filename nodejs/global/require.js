require('../module/var');
console.log(require)

// require.main을 통해 불러오는 곳의 정보를 알 수 있다.
// require는 한 번 불러오는 것은 캐쉬에 저장해서 다음 부터 메모리에서 불러온다.
// 캐쉬 정보를 지울 수도 있다.

// 노드에서 파일을 실행할 때 수정을 하면 변경된 것은 껐다가 켜야 적용이된다.
// require cache를 적절히 쓰면 실시간 업데이트를 하는 효과를 얻을 수 있다.

// require는 제일 위에 올필요는 없다.