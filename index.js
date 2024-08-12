let sideBar = document.querySelector("#navList .sidebar");
console.log(sideBar);
const navEl = document.querySelector("nav");
const sideBarMenu = document.querySelector(".sidebar");
let navLinks = document.querySelector(".sidebar li");
console.log(navLinks);
const menuSvg = document.querySelector(".menuSvgContainer");
const body = document.querySelector("body");
const workBtnEl = document.querySelector(".viewWorkBtn"); 
let prevScrollPos = window.scrollY;
const toggleTheme = document.querySelector("#toggleThemeModeContainer");
const bodyEl = document.querySelector('body');

window.onscroll = function () {
  let currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    document.querySelector("nav").style.top = "35px";
    document.querySelector("#toggleMenuIcon").style.top = "30px";

  } else {
    document.querySelector("nav").style.top = "-80px";
    document.querySelector("#toggleMenuIcon").style.top = "-80px";

    
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


function togglePageBackground() {
  toggleTheme.classList.toggle("active");
  bodyEl.classList.toggle("active");
};
toggleTheme.addEventListener("click", togglePageBackground);

const dots = document.querySelectorAll(".dot");

const pictureFrame = document.querySelector(".picture-frame");
const nextEl = document.querySelector(".next");
const previousEl = document.querySelector("#previous");

//Get Images into an array
const images = [
  { src: "asset/image/todo-list image-with-a-person.jpg", alt: "To_Do_List" },
  { src: "asset/image/sign-up-form.jpg", alt: "sign up form" },
  { src: "asset/image/Pf-bg.jpeg", alt: "portfolio project" },
];

let currentIndex = 0;
let slideshowInterval;

//Display current image in the picture frame
function displayCurrentImage() {
  pictureFrame.textContent = "";

  //Create an image element and append it to the picture frame
  let toDoImg = document.createElement("img");
  toDoImg.classList.add("toDoImg");
  toDoImg.src = images[currentIndex].src;
  toDoImg.alt = images[currentIndex].alt;

  pictureFrame.appendChild(toDoImg);

  //Update the active dot
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}
displayCurrentImage();

function startSlideshow() {
  slideshowInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    displayCurrentImage();
  }, 5000); // Change the interval time (in milliseconds) to adjust the slideshow speed
}


const displayNextImage = () => {
  //Loop through the images in circular form
  currentIndex = (currentIndex + 1) % images.length;
  displayCurrentImage();
  clearInterval(slideshowInterval);
  startSlideshow();
};