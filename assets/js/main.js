//Xử lý animation Slide 1
var slideimgs = document.querySelectorAll(".slide__item--img");
console.log(slideimgs.length);

function Appearimg(n){
    let i;
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

var modalres = document.querySelector(".modal__nav-res-box");

function clickresicon(){
    modalres.classList.add("modal__nav-res-box--active");
}

function clickresiconX(){
    modalres.classList.remove("modal__nav-res-box--active");
}

//Xử lý Modal nav menu

var modalmenu = document.querySelector(".modal__nav-menu");

function clickmenuicon(){
    modalmenu.classList.add("modal__nav-menu--active");
}

function clickmenuiconX(){
    modalmenu.classList.remove("modal__nav-menu--active");
}

//Xử lý body slide

var bodyslidedots = document.querySelectorAll(".body__slide-icon--item");
var bodyslideimgs = document.querySelectorAll(".body__slide-img");

function clickdot(n){
    let i;
    for(i=0;i<bodyslideimgs.length;i++){
        bodyslideimgs[i].classList.remove("body__slide-img--active");
    }
    bodyslideimgs[n].classList.add("body__slide-img--active");

    for(i=0;i<bodyslidedots.length;i++){
        bodyslidedots[i].classList.remove("body__slide-icon--item-active");
    }
    bodyslidedots[n].classList.add("body__slide-icon--item-active");
}

//Xử lý Press & Accolades

var presslist = document.querySelectorAll(".body__press--item");

function Appearpress(n){
    let i;
    for(i=0;i<presslist.length;i++){
        presslist[i].classList.remove("body__press--item-active");
    }
    presslist[n].classList.add("body__press--item-active");
}

var y=1;
var auto2 = setInterval(function(){
    Appearpress(y)
    y=y+1;
    if(y >= presslist.length){
        y=0;
    }
    return y;
},3000);