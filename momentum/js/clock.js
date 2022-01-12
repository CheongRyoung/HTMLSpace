const clock = document.getElementById("clock");


function getClock(){
    const date = new Date(); //현재시간 생성
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`; //포맷에 필요한 값만 추출
}
getClock();  //function 실행
setInterval(getClock, 1000);  // 특정 함수를 특정 시간 간격으로 실행(1초마다 가져오기)
// 실시간 처럼 보여줌

//setTimeout(sayHello, 5000);

// DATE OBJECT!!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// "word".padStart(length, String); word의 길이가 length보다 작다면, String을 추가

// am과 pm을 나타내는 방법은 boolean으로
// const amPm = date.getHours() > 12 ? am : pm;