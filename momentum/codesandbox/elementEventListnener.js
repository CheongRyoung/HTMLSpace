// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const sayHello = document.querySelector("body > h2");

const superEventHandler = {
  handleMouseOver: function () {
    sayHello.innerText = "The mouse is here";
    sayHello.style.color = colors[0];
  },

  handleMouseleave: function () {
    sayHello.innerText = "The mouse is leave";
    sayHello.style.color = colors[1];
  },

  handleWindowResize: function () {
    sayHello.innerText = "You just resized!";
    sayHello.style.color = colors[2];
  },

  handleMousecontextmenu: function () {
    sayHello.innerText = "That was a right click!";
    sayHello.style.color = colors[3];
  }
};

sayHello.addEventListener("mouseover", superEventHandler.handleMouseOver);
sayHello.addEventListener("mouseleave", superEventHandler.handleMouseleave);
window.addEventListener("resize", superEventHandler.handleWindowResize);
sayHello.addEventListener(
  "contextmenu",
  superEventHandler.handleMousecontextmenu
);
