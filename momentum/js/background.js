const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
const body = document.querySelector("body");
body.appendChild(bgImage);

