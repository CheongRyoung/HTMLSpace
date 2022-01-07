const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick(){
//     const currentColor = h1.style.color;
//     let newColor;
//     if(currentColor === "blue"){
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }
//     h1.style.color = newColor;
// }

// h1.style.color 처럼 css를 직접변경하는 것을 다른 언어들과 섞이게 된다.
// 그러니 변수를 지정해서 값을 돌려주는 방법을 사용하자
// style은 css 작성하도록하자..

// -------------------------------------------------------------------
// style은 css에서 만들어 필요한 class를 불러오는 방법, 
// 하지만 클래스명을 그대로 가져오면 오타의 발생 여부와 보수의 편의를 위해
// 변수에 넣어서 변수를 활용하자, 또한 자바스크립트가 오류를 캐치할 수 있다.

// function handleTitleClick(){
//     const clickedClass = "active";        //css의 클래스 변수에 넣기
//     if(h1.className === clickedClass) {   // 변수로 클래스 여부확인
//         h1.className = "";  
//     } else {
//         h1.className = clickedClass;
//     }
// }

// h1.addEventListener("click", handleTitleClick);
//----------------------------------------------------------------------

// 그렇다면 기존에 적용된 class의 다른 style은 어떻게 되는 걸까?
// 사라진다.... 그렇다면 변수에 class를 추가해주어야하나? 업데이트 될때마다?!!
// 아니다.. 우리가 해줘야 하는건 모든 class name을 변경하지 않는것!!!
// 바로 classList!! 배열인듯 메소드(contains, remove, add)
// classList.toggle()은 classList에 ()가 존재하면 제거, 존재하지 않으면 추가를 해준다.
// https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList 

function handleTitleClick(){    
    h1.classList.toggle("active");
}

h1.addEventListener("click", handleTitleClick);