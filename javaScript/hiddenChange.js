const showinfo = document.querySelectorAll(".showinfo");
const hidden = document.querySelectorAll(".hidden");


for(var i=0; i<showinfo.length; i++){
  let hiddenNum = i;
  showinfo[i].addEventListener("click", e => {
    e.preventDefault();
    for(var j=0; j<hidden.length; j++){
      hidden[j].classList.add("hidden");
    }
    hidden[hiddenNum].classList.remove("hidden");
  });
}

// 클릭하면 특정 node만 보일수 있게하고 다른 node는 감추는 방법