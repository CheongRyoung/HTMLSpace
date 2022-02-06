const body = document.querySelector("body");
const WINDOWFULLSIZE_CLASS = "windowfullSize";
const WINDOWHALFSIZE_CLASS = "windowHalfSize";
const WINDOWQARTERSIZE_CLASS = "windowQarterSize";

const resize = {
  windowfullSize: function () {
    body.classList.remove(WINDOWQARTERSIZE_CLASS);
    body.classList.remove(WINDOWHALFSIZE_CLASS);
    body.classList.add(WINDOWFULLSIZE_CLASS);
  },
  windowHalfSize: function () {
    body.classList.remove(WINDOWQARTERSIZE_CLASS);
    body.classList.add(WINDOWHALFSIZE_CLASS);
  },
  windowQarterSize: function () {
    body.classList.remove(WINDOWFULLSIZE_CLASS);
    body.classList.remove(WINDOWHALFSIZE_CLASS);
    body.classList.add(WINDOWQARTERSIZE_CLASS);
  }
};
function handleResize() {
  if (window.innerWidth > 600) {
    resize.windowfullSize();
  } else if (window.innerWidth > 300) {
    resize.windowHalfSize();
  } else {
    resize.windowQarterSize();
  }
}
window.addEventListener("resize", handleResize);