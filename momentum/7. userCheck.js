const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault(); //submit 했을 때 기본동작 차단(새로고침등)
  loginForm.classList.add(HIDDEN_CLASSNAME); // class 숨기기
  const username = loginInput.value; // 입력 값 추출
  localStorage.setItem(USERNAME_KEY, username); // 추출한 값 브라우저에 저장
  paintGreertings(username)
}
// 중복 구문을 function으로 만들자
// () 안은 공유가 안되니 파라미터를 받도록 하자
function paintGreertings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

// loginForm을 하기전에 localstorage를 check해야 한다.
// 체크 후 회원이면 인사를 보내고, 아니면 입력창을 보여준다.
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreertings(savedUsername)
}