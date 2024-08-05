let sideBar = document.querySelector("#navList .sidebar");
console.log(sideBar);
const navEl = document.querySelector("nav");
const sideBarMenu = document.querySelector(".sidebar");
let navLinks = document.querySelector(".sidebar li");
console.log(navLinks);
const menuSvg = document.querySelector(".menuSvgContainer");
const body = document.querySelector("body");
let prevScrollPos = window.scrollY;

window.onscroll = function () {
  let currentScrollPos = window.scrollY;
  if (prevScrollPos > currentScrollPos) {
    document.querySelector("nav").style.top = "0";
  } else {
    document.querySelector("nav").style.top = "-80px";
    // document.querySelector(".sidebar").style.display = "flex";
  }
};



let menuOpen = false;
function showSideBar(event) {
  const navElId = document.querySelector('#navList')

  if (window.matchMedia("(max-width: 500px)").matches) {
    menuOpen = true;
    sideBar.style.width = "110px";
    sideBar.style.padding = '5px'
    console.log(navElId);
    navElId.style.display = "block";
  }
    navElId.style.display = "block";

}
menuSvg.addEventListener("touchstart", function () {
  if (!menuOpen) {
    showSideBar();
  }
});

function removeSideBar(event) {
  const navElId = document.querySelector("#navList");
  const sideBarElement = document.querySelector(".sidebar");

  if (!sideBarElement.contains(event.target)) {
    menuOpen = false;
    sideBar.style.width = "0";
    navElId.style.display = "none";
  }
}

document.addEventListener("click", removeSideBar);
//   document
//     .querySelector(".sidebar")
//     .addEventListener("touchstart", function (event) {
//       event.stopPropagation();
//     });

//   const sidebarItems = document.querySelectorAll(".sidebar li a");
//   sidebarItems.forEach((item) => {
//     item.addEventListener("click", removeSideBar);
//   });

// function removeSideBar(event) {

//   const navElId = document.querySelector("#navList");

//    menuOpen = false;
//   sideBar.style.width = "0px";

//   if (window.matchMedia("(max-width: 500px)").matches) {
//     menuOpen = true;
//     sideBar.style.width = "0";

//     if (event.target.class === '.sidebar') {
//       console.log(event.target)
//     navElId.style.display = "none";
      
//     }
//   }
//   navElId.style.display = "none";

// }
// document.addEventListener('touchstart', removeSideBar);

// body.addEventListener("touchstart", function () {
//   if (menuOpen) {
//     removeSideBar();
//   }
// });


