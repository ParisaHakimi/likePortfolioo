// fixed menu

const nav = document.querySelector("nav");
const navOffsetTop = nav.offsetTop;
const elevator = document.querySelector(".elevator");

window.addEventListener("scroll", function () {
  let scroll = window.scrollY;
  if (scroll > navOffsetTop) {
    nav.classList.add("fixed-menu");
    elevator.style.opacity = "1";
    elevator.style.visibility = "visible";
  } else {
    nav.classList.remove("fixed-menu");
    elevator.style.opacity = "0";
    elevator.style.visibility = "hidden";
  }
});
