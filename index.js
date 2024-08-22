let sideBar = document.querySelector("#navList .sidebar");
console.log(sideBar);
const navEl = document.querySelector("nav");
const sideBarMenu = document.querySelector(".sidebar");
let navLinks = document.querySelector(".sidebar li");
console.log(navLinks);
const menuSvg = document.querySelector(".menuSvgContainer");
const body = document.querySelector("body");
const workBtnEl = document.querySelector(".viewWorkBtn"); 
const toggleTheme = document.querySelector("#toggleThemeModeContainer");
const bodyEl = document.querySelector('body');
let prevScrollPos = window.scrollY;

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


function togglePageBackgroundColor() {
  toggleTheme.classList.toggle("active");
  bodyEl.classList.toggle("active");
};
toggleTheme.addEventListener("click", togglePageBackgroundColor);

const dots = document.querySelectorAll(".dot");

const pictureFrame = document.querySelector(".picture-frame");
const nextEl = document.querySelector(".next");
const previousEl = document.querySelector("#previous");


const images = [
  { src: "asset/image/todo-list image-with-a-person.jpg", alt: "To_Do_List" },
  { src: "asset/image/sign-up-form.jpg", alt: "sign up form" },
  { src: "asset/image/Screenshot (40).png", alt: "portfolio project" },
];

let currentIndex = 0;
let slideshowInterval;


function displayCurrentImage() {
  pictureFrame.textContent = "";

  
  let toDoImg = document.createElement("img");
  toDoImg.classList.add("toDoImg");
  toDoImg.src = images[currentIndex].src;
  toDoImg.alt = images[currentIndex].alt;

  pictureFrame.appendChild(toDoImg);

  
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}
displayCurrentImage();

function startSlideshow() {
  slideshowInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    displayCurrentImage();
  }, 3000); 
}


const displayNextImage = () => {
  
  currentIndex = (currentIndex + 1) % images.length;
  displayCurrentImage();
  clearInterval(slideshowInterval);
  startSlideshow();
};

const prevImage = () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  displayCurrentImage();
  clearInterval(slideshowInterval);
  startSlideshow();
};

nextEl.addEventListener("click", displayNextImage);
previousEl.addEventListener("click", prevImage);

function showSlides(index) {
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });

  currentIndex = index;
  displayCurrentImage();
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlides(index));
});