// html의 코드를 js를 통해서 수정
// 자바스크립트 시점에서 html을 바라보는 느낌 
// html에 있는 title 태그등을 자바스크립트로 가져다가 사용할 수 있다.

document.title = "Hello from html";

//document는 html = 웹사이트와 같다 

// 자바스크립트를 통해서 document를 수정이 가능하다.

// 자바스크립트를 통해서 html의 요소들을 가져오기(grab)

const h1 = document.querySelector("div.hello:first-child h1");

// element의 이벤트리스너 Web APIs 하단링크에서 Events 항목에서 찾아보자~
// https://developer.mozilla.org/en-US/docs/Web/API/Element

function handleTitleClick(){
    h1.style.color = "blue";
}

function handleMouseOver(){
    h1.style.color = "red";
    h1.innerText = "mouse over"
}

function handleMouseLeave(){
    h1.style.color = "black";
    h1.innerText="Grab me!"
}

// 클릭시 function을 실행하는 이벤트리스너
// parameter에 리스너와, function명만 작성!
// title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseover", handleMouseOver)
title.addEventListener("mouseleave", handleMouseLeave)

// title.onclick = handleTitleClick; 이렇게 해도 위와 동일하게 작동한다.
title.onclick = handleTitleClick;

// .addEventListener를 선호하는 이유는 나중에 removeEventListener를 통해서 
// event listener를 제거할 수 있기 때문이다.


// window references
// https://developer.mozilla.org/en-US/docs/Web/API/window
function handleWindowResize(){
    document.body.style.backgroundColor ="tomato";
}

window.addEventListener("resize", handleWindowResize)

function handleWindowCopy(){
    alert("copy!!")
}
window.addEventListener("copy", handleWindowCopy);

function handleWindowOffline(){
    alert("SOS no WIFI")
}
window.addEventListener("offline", handleWindowOffline)

function handleWindowonline(){
    alert("ALLGOOd")
}
window.addEventListener("online", handleWindowonline)