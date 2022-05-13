const EventEmitter = require('events');

const myEvent = new EventEmitter();

// addListener == on
myEvent.addListener('event1', () => {
    console.log('event 1');
})

myEvent.on('event2', () => {
    console.log('event 2');
})
myEvent.on('event2', () => {
    console.log('event 2 추가');
})

// once는 이벤트가 한번만 실행된다.
myEvent.once('event3', () => {
    console.log('event 3')
})

myEvent.emit('event1');
myEvent.emit('event2');
myEvent.emit('event3');
myEvent.emit('event3');

myEvent.on('event 4', () => {
    console.log('event 4');
})

myEvent.removeAllListeners('event 4'); //이벤트를 삭제
myEvent.emit('event 4');

const listener = () => {
    console.log('event 5');
}

myEvent.on('event 5', listener);
myEvent.removeListener('event 5', listener); //이벤트에 등록된 콜백함수 삭제
myEvent.emit('event 5');

console.log(myEvent.listenerCount('event2')); // 이벤트에 등록된 콜백함수 갯수 리턴