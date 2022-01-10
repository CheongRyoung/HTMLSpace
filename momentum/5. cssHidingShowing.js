const loginForm = document.querySelector("#login-Form");
const loginInput = document.querySelector("#login-Form Input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");;
const link = document.querySelector("#login-Form a");

const HIDDEN_CLASSNAME = "hidden"; // 대문자이유: 관행

// input 태그의 value를 수정하거나 선입력해놓을 수 있다.
// if문을 작성해서 user의 실수를 예방할 수 있지만, 
// 브라우저의 기능을 사용해서 user의 행동을 제한할 수 잇다.
// ex> form태그안의 input의 required (필수 입력창)
// form 태크는 입력하게 되면 새로고침이 되는데 이유는 submit하기 때문

// onLoginSubmit(event)처럼 파라미터를 넣고, 기본동작을 막는 펑션을 써서 막으면
// 로그를 얻을 수 있다.

function onLoginSubmit(event){
    event.preventDefault();      //새로고침 차단
    loginForm.classList.add(HIDDEN_CLASSNAME); //css에 class로 display: none;으로 속성이 부여되어 있는 것을 불러옴
    const username = loginInput.value;
    greeting.innerText = `Hello ${username}`; // `문자 ${변수명}` 을 통해 변수의 값을 가져올수 있다.
    greeting.classList.remove(HIDDEN_CLASSNAME); // display:none;인 class를 제거
    // const username = loginInput.value;
    // console.log(useawrname);
}
loginForm.addEventListener("submit", onLoginSubmit)

// 자바스크립트는 addEventListener를 수행할 때 행동시 function을 찾아
// 대신 수행해준다. 이때 JS는 function에 첫번째 인자로 object를 넣는다.
// function 펑션명(object) object에는 event에 대한 여러 정보가 담겨져 있다.
// 이 정보에 접근하기 위해서는 function 펑션명(object){} 이렇게 작성 후
// object.~~~()을 수행하여 얻으면 된다.

function handleLinkClick(event){
    event.preventDefault();

    console.dir(event);
}
link.addEventListener("click", handleLinkClick)
