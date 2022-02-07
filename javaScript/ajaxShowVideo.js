
// 여러개의 컨텐츠가 있을 때 해당 컨텐츠를 클릭하면 나머지는 닫고 해당된 것만 열기
const showinfo = document.querySelectorAll(".showinfo");
const targetCourse = document.querySelectorAll(".targetCourse");

for(var z=0; z<showinfo.length; z++){
  let i = z;
  let course_no = showinfo[i].getAttribute("value");
  showinfo[i].addEventListener("click", e => {
    e.preventDefault();
    
    if(targetCourse[i].lastElementChild.getAttribute("id") == "video") {
        targetCourse[i].lastElementChild.remove();	 
    } else {
    
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            const map = JSON.parse(xhr.responseText);
            
            const videoSection = document.createElement("div");
            videoSection.setAttribute("class", "row");
            videoSection.classList.add("class", "mt-3");
            videoSection.classList.add("class", "border");
            videoSection.classList.add("class", "border-1");
            videoSection.setAttribute("id", "video")

                const videoDiv = document.createElement("div");
                videoDiv.setAttribute("class", "col");

                    const videoHead =  document.createElement("div");
                    videoHead.setAttribute("class", "row");
                    videoHead.classList.add("class", "p-3");
                    videoHead.classList.add("class", "text-start");

                        const headNo = document.createElement("div");
                        headNo.setAttribute("class", "col");
                            const headNoSpan = document.createElement("span");
                            headNoSpan.innerText = "No.";
                            headNo.append(headNoSpan);

                        const headTitle = document.createElement("div");
                        headTitle.setAttribute("class", "col-7");
                        headTitle.classList.add("class", "text-center");
                            const headTitleSpan = document.createElement("span");
                            headTitleSpan.innerText = "강의제목";
                            headTitle.append(headTitleSpan);

                        const headLength = document.createElement("div");
                        headLength.setAttribute("class", "col");
                            const headLengthSpan = document.createElement("span");
                            headLengthSpan.innerText = "강의길이";
                            headLength.append(headLengthSpan);

                        const headShow = document.createElement("div");
                        headShow.setAttribute("class", "col");
                            const headShowSpan = document.createElement("span");
                            headShowSpan.innerText = "강의보기";
                            headShow.append(headShowSpan);
                    

                    videoHead.append(headNo, headTitle, headLength, headShow);
                    videoDiv.append(videoHead);
                    videoSection.append(videoDiv);

                    for(var j=0; j<map.videoList.length; j++){
                    
                    let videoBody = document.createElement("div");
                    videoBody.setAttribute("class", "row");
                    videoBody.classList.add("class", "text-start");
                    videoBody.classList.add("class", "border-top");
                    videoBody.classList.add("class", "pt-3");

                        let bodyNo = document.createElement("div");
                        bodyNo.setAttribute("class", "col");
                        bodyNo.classList.add("class", "ms-3");
                            let bodyNoSpan = document.createElement("div");
                            bodyNoSpan.innerText = j + 1 + ".";
                            bodyNo.append(bodyNoSpan);

                        let bodyTitle = document.createElement("div");
                        bodyTitle.setAttribute("class", "col-7");
                            let bodyTitleSpan = document.createElement("div");
                            bodyTitleSpan.innerText = map.videoList[j].course_video_title;
                            bodyTitle.append(bodyTitleSpan);

                        let bodyLength = document.createElement("div");
                        bodyLength.setAttribute("class", "col");
                            let bodyLengthVideo = document.createElement("video");
                            bodyLengthVideo.setAttribute("src", "http://localhost:8123/uploadFolder2/"+map.videoList[j].course_video_url);
                            bodyLengthVideo.setAttribute("style", "display: none;");
                            let bodyLengthSpan = document.createElement("div");
                            bodyLengthSpan.innerText = "00:00";
                            bodyLength.append(bodyLengthVideo);
                            bodyLength.append(bodyLengthSpan);

                        let bodyShow = document.createElement("div");
                        bodyShow.setAttribute("class", "col");
                            let bodyShowA = document.createElement("a");
                            bodyShowA.setAttribute("class", "btn");
                            bodyShowA.classList.add("class", "btn-outline-primary");
                            bodyShowA.classList.add("class", "btn-sm");
                            bodyShowA.classList.add("class", "mb-2");
                            bodyShowA.setAttribute("href", "/uploadFolder2/"+map.videoList[j].course_video_url);
                            bodyShowA.innerText = "수강";
                            bodyShow.append(bodyShowA);

                    videoBody.append(bodyNo, bodyTitle, bodyLength, bodyShow);
                    videoDiv.appendChild(videoBody);
                    }

                    targetCourse[i].append(videoSection);
        }
    }

    xhr.open("get", "./getCourseVideo?course_no=" + course_no, true)
    xhr.send();
    
    
    const videos = document.querySelectorAll("video");
    
    for (var k=0; k<videos.length; k++) {
        var dura = videos[z].duration;
        videos[k].nextElementSibling.innerText = 
            String(Math.floor(dura/60)).padStart(2, "0") + " : " + String(Math.floor(dura%60)).padStart(2, "0");
      }
    }

  });
}


