const hamburgerBtn = document.querySelector(".hamburger");
const subMenu = document.querySelector("header>nav>ul");
const snsIcon = document.querySelector(".instagram_icon");
const runLeft = document.querySelector("svg text");

let ovf,fortP

hamburgerBtn.addEventListener("click",function(){
    subMenu.classList.toggle("active");
    snsIcon.classList.toggle("active");
});


$(function(){
    ovf = this.getElementById("skill");
    fortP = this.getElementById("portfolio");
    winResize();
    $(window).bind({resize: winResize, scroll: winScroll});
    });
    function winResize(){
    ovf.style.top = fortP.offsetHeight + "px";
    }
    
    function winScroll(){
    var op = 1 - (window.pageYOffset / fortP.offsetHeight);
    fortP.style.opacity = op;
    }