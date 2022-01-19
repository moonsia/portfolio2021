const hamburgerBtn = document.querySelector(".hamburger");
const subMenu = document.querySelector("header>nav>ul");
const sublistA = document.querySelectorAll("header>nav>ul>li>a");
const snsIcon = document.querySelector(".instagram_icon");
const runLeft = document.querySelector("svg text");


for(let i = 0; i<sublistA.length; i++){
    sublistA[i].addEventListener("click",function(){
        subMenu.classList.toggle("active");
        snsIcon.classList.toggle("active");
    });
}


hamburgerBtn.addEventListener("click",function(){
    subMenu.classList.toggle("active");
    snsIcon.classList.toggle("active");
    
});