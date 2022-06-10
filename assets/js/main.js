//Xử lý animation Slide 
var slideimgs = document.querySelectorAll(".slide__item--img");
console.log(slideimgs.length);

function Appearimg(n){
    var i;
    for(i=0;i<slideimgs.length;i++){
        slideimgs[i].classList.remove('slide__item--img-active');
    }
    slideimgs[n].classList.add('slide__item--img-active');
}

var x=1;
var auto = setInterval(function(){
    Appearimg(x);
    x=x+1;
    if(x >= slideimgs.length){
        x=0;
    }
    return x;
},5000);

//Xử lý Modal nav rex box

var resicon = document.querySelector(".nav__item-resicon");
var resiconX = document.querySelector(".modal__nav-res--header-icon");
var modalres = document.querySelector(".modal__nav-res-box");

function clickresicon(){
    modalres.classList.add("modal__nav-res-box--active");
}

function clickresiconX(){
    modalres.classList.remove("modal__nav-res-box--active");
}

//Xử lý Modal nav menu

var menuicon = document.querySelector(".nav__menu");
var menuiconX = document.querySelector(".modal__nav-menu--icon-box");
var modalmenu = document.querySelector(".modal__nav-menu");

function clickmenuicon(){
    modalmenu.classList.add("modal__nav-menu--active");
}

function clickmenuiconX(){
    modalmenu.classList.remove("modal__nav-menu--active");
}