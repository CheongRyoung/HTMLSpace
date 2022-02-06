function handlevideoInputPlus(event){
    event.preventDefault();
    var node = document.importNode(videoNode[0], true);
    videoPlus.appendChild(node);
  }
  
  function handlevideoInputDelete(event) {
    event.preventDefault();
    document.querySelector("#videoPlus").lastElementChild.remove()
  }
  
  addVideo.addEventListener("click", handlevideoInputPlus);
  deleteVideo.addEventListener("click", handlevideoInputDelete)

  //버튼클릭시 추가 제거를 한다.