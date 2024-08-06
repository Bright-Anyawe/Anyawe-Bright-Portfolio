let sideBar = document.querySelector("#navList .sidebar");
console.log(sideBar);
const navEl = document.querySelector("nav");
const sideBarMenu = document.querySelector(".sidebar");
let navLinks = document.querySelector(".sidebar li");
console.log(navLinks);
const menuSvg = document.querySelector(".menuSvgContainer");
const body = document.querySelector("body");
let prevScrollPos = window.scrollY;

//Hide nav elemnt when user scroll down and and display it when scroll up
window.onscroll = function () {
  let currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    document.querySelector("nav").style.top = "35px";
  } else {
    document.querySelector("nav").style.top = "-80px";
    // document.querySelector(".sidebar").style.display = "flex";
  }
  prevScrollPos = currentScrollPos;
};

const toggleEl = document.querySelector("#toggleMenuIcon");
const newSideBar = document.querySelector("#firstSideBarContainer");

function removeSideBar(e) {
  if (e.target !== toggleEl && e.target !== newSideBar) {
    toggleEl.classList.remove("active");
    newSideBar.classList.remove("active");
  }
}
document.addEventListener("touchstart", removeSideBar);
document.addEventListener("click", removeSideBar);

function toggleMenu() {
  toggleEl.classList.toggle("active");
  newSideBar.classList.toggle("active");
}
toggleEl.addEventListener("click", toggleMenu);

const toggleTheme = document.querySelector("#toggleThemeModeContainer");
const bodyEl = document.querySelector('body');

// Toggle page background color when a an element is active
function togglePageBackground() {
  toggleTheme.classList.toggle("active");
  bodyEl.classList.toggle("active");
};
toggleTheme.addEventListener("click", togglePageBackground);