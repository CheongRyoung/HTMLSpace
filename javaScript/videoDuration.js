const videos = document.querySelectorAll("video");

for (var z=0; z<videos.length; z++) {
    var dura = videos[z].duration;
    videos[z].nextElementSibling.innerText = 
        String(Math.floor(dura/60)).padStart(2, "0") + " : " + String(Math.floor(dura%60)).padStart(2, "0");
 }

 //video 태그를 동해 재생시간을 추출
 // String()을 통해 문자열로 바꾸고, String().padStart을 통해 길이가 2보다 작으면 0을 문자열에 추가하도록 할 수 있다.