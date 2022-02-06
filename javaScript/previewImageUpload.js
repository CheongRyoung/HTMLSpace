function readImage(event) {
    const eT = event.target;
    var reader = new FileReader();
    
    reader.readAsDataURL(eT.files[0]);
  
    reader.onload = e => {
      previewImage.src = e.target.result;
    }
  }
  
  inputThumbnail.addEventListener("change", readImage)

  // 이미지 업로드시 미리보기를 제공