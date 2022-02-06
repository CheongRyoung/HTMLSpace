window.onload = function () {
    document.querySelector(".carousel-item").classList.add("active")
    const cardText = document.querySelectorAll(".card-text");
    for(var i=0; i<cardText.length; i++) {
      cardText[i].innerText =  parseInt(cardText[i].innerText).toLocaleString();
    }
  } 

  // 창 로딩이 완료되면 function을 동작한다.