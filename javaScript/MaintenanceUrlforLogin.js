const url = window.location.href;
const inputUrl = document.querySelector("#inputUrl");

inputUrl.value = url.substring(url.indexOf(/bseven/)+8);

// input hidden에 넣어주어서 컨트롤러의 리퀘스트 맵핑에 파라미터를 넘겨줘서
// 어디서든 로그인을 하면 url을 유지할 수 있도록 한다.