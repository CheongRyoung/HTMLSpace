const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  const giveMeColor = document.querySelector("button");
  const body = document.querySelector("body");
  
  function hadleOnclick(event) {
    event.preventDefault();
    const random1 = Math.floor(Math.random() * colors.length);
    let random2;
    while (true) {
      random2 = Math.floor(Math.random() * colors.length);
      if (random1 !== random2) {
        break;
      }
    }
    body.style.background = `linear-gradient(0.25turn, ${colors[random1]}, ${colors[random2]})`;
  }
  giveMeColor.addEventListener("click", hadleOnclick);
  