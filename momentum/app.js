// html의 코드를 js를 통해서 수정
// 자바스크립트 시점에서 html을 바라보는 느낌 
// html에 있는 title 태그등을 자바스크립트로 가져다가 사용할 수 있다.

document.title = "Hello from html";

//document는 html = 웹사이트와 같다 

// 자바스크립트를 통해서 document를 수정이 가능하다.

// 자바스크립트를 통해서 html의 요소들을 가져오기(grab)

const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick(){
    title.style.color = "blue";
}

function handleMouseOver(){
    title.style.color = "red";
}

function handleMouseLeave(){
    title.style.color = "black";
}

// 클릭시 function을 실행하는 이벤트리스너
// parameter에 리스너와, function명만 작성!
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseover", handleMouseOver)
title.addEventListener("mouseleave", handleMouseLeave)

// 이벤트리스너 Web APIs 하단링크에서 Events 항목에서 찾아보자~
// https://developer.mozilla.org/en-US/docs/Web/API/Element
