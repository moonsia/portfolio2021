const hamburgerBtn = document.querySelector(".hamburger");
const subMenu = document.querySelector("header>nav>ul");
const snsIcon = document.querySelector(".instagram_icon");


hamburgerBtn.addEventListener("click",function(){
    subMenu.classList.toggle("active");
    snsIcon.classList.toggle("active");
})