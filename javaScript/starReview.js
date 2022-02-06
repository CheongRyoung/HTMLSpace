// 별점 구현
const checkStar = document.querySelectorAll(".checkStar");
const star = document.querySelectorAll(".star");
const chooseWord = document.querySelector("#chooseWord");


function color(event) {
    const num = parseInt(event.target.value);
    for(var i=0; i<checkStar.length; i++){
        star[i].classList.remove("redStar");
    }
    for(var i=0; i<num; i++){
        star[i].classList.add("redStar");
    }

    switch(num) {
    case 1:  // if (x === 'value1')
      chooseWord.style.color = 'red';
      chooseWord.innerText = "1점 별로에요";
      break;

    case 2:  // if (x === 'value2')
    chooseWord.style.color = 'red';
      chooseWord.innerText = "2점 그저그래요";
      break;

    case 3:  // if (x === 'value2')
    chooseWord.style.color = 'red';
    chooseWord.innerText = "3점 괜찮아요";
    break;

    case 4:  // if (x === 'value2')
    chooseWord.style.color = 'red';
    chooseWord.innerText = "4점 좋아요";
    break;

    case 5:  // if (x === 'value2')
    chooseWord.style.color = 'red';
    chooseWord.innerText = "5점 최고에요";
    break;
    }
}

for(var i=0; i<checkStar.length; i++){
    checkStar[i].addEventListener("click", color);
}