//비동기로 했을 때 작업의 순서를 몰라 임의로 callback에 순서를 주면 아래와 같이 콜백헬이 발생
//순서대로 실행이 되기는 함
//이렇게 했을 때 동기랑 무슨차이? 
//묶음으로 다같이 백그라운드로 보내기 때문에 다음작업을 수행하면서 백그라운드에서 순서를 지키면서 실행
//동기는 전의 처리를 기다려야하기 때문에 위와의 차이가 있다.
const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
    if(err) {
        throw err;
    }
    console.log('1번', data.toString());
    fs.readFile('./readme.txt', (err, data) => {
        if(err) {
            throw err;
        }
        console.log('2번', data.toString());
        fs.readFile('./readme.txt', (err, data) => {
            if(err) {
                throw err;
            }
            console.log('3번', data.toString());
            fs.readFile('./readme.txt', (err, data) => {
                if(err) {
                    throw err;
                }
                console.log('4번', data.toString());
            });
        });

    });

});