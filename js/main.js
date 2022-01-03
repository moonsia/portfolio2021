const hamburgerBtn = document.querySelector(".hamburger");
const subMenu = document.querySelector("header>nav>ul");
const snsIcon = document.querySelector(".instagram_icon");
const runLeft = document.querySelector("svg text");

console.log(runLeft);

hamburgerBtn.addEventListener("click",function(){
    subMenu.classList.toggle("active");
    snsIcon.classList.toggle("active");
});
