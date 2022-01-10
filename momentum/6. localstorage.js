const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault(); //submit 했을 때 기본동작 차단(새로고침등)
  loginForm.classList.add(HIDDEN_CLASSNAME); // class 숨기기
  const username = loginInput.value;
  localStorage.setItem("username", username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

// local storage는 브라우저에 뭔가를 저장할 수 있게 해준다(미니 DB)
// 링크 https://developer.mozilla.org/en-US/docs/Web/API/window/localstorage
// method > setItem, getItem, removeItem 등