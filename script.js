let tulisan = document.querySelector('.ket2');
let bg = document.querySelector(".navb-item");
let text = document.querySelector('.ket31');
let text2 = document.querySelector('.ket32');
let text3 = document.querySelector('.ket33');
let text4 = document.querySelector('.ket34');
let sign1 = document.querySelector('.tentang-bg');
let bag1 = document.querySelector('.ket4')
let bag2 = document.querySelector('.ket5')
let sign2 = document.querySelector('.tentang-bg2');
let bag3 = document.querySelector('.bag3');
let sign3 = document.querySelector('.tentang-bg3');
let bag4 = document.querySelector('.bag4');
let sign4 = document.querySelector('.tentang-bg4');
let bag5 = document.querySelector('.contain');


if (window.innerWidth >= 1000 || window.innerHeight >= 1000){
    tulisan.innerText = "Berdedikasi untuk kemajuan bangsa Indonesia";
} else{
    tulisan.innerText = "";
}


window.addEventListener("scroll", ()=>{
    let scroll2 = scrollY;

    if(window.pageYOffset >= 50){
        bg.style.backgroundColor = "rgba(0,0,0,.8)";
        bg.style.zIndex = 100;
        bg.style.transitionDuration = 1 + "s";
    } else if (window.pageYOffset < 100){
        bg.style.backgroundColor = "rgba(0,0,0,0)";
    }

    if(scroll2.toFixed() > sign1.offsetTop - 400){
        text.style.opacity = 1;
        text.style.marginLeft = 0 + "px";
        text.style.transitionDuration = 1 + 's';
        bag1.style.opacity = 1;
        bag1.style.transitionDuration = 2 + 's';
        bag2.style.opacity = 1;
        bag2.style.transitionDuration = 2 + 's';
    } else {
        text.style.opacity = 0;
        text.style.marginLeft = (-50) + "px";
        bag1.style.opacity = 0;
        bag2.style.opacity = 0;
    }

    if(scroll2.toFixed() > sign2.offsetTop - 400){
        text2.style.opacity = 1;
        text2.style.marginLeft = 0 + "px";
        text2.style.transitionDuration = 1 + 's';
        bag3.style.opacity = 1;
        bag3.style.transitionDuration = 2 + 's';
    } else if(scroll2.toFixed() < sign2.offsetTop + "px"){
        text2.style.opacity = 0;
        text2.style.marginLeft = (-50) + "px";
        bag3.style.opacity = 0;
    }

    if(scroll2.toFixed() > sign3.offsetTop - 400){
        text3.style.opacity = 1;
        text3.style.marginLeft = 0 + "px";
        text3.style.transitionDuration = 1 + 's';
        bag4.style.opacity = 1;
        bag4.style.transitionDuration = 2 + 's';
    } else if(scroll2.toFixed() < sign3.offsetTop + "px"){
        text3.style.opacity = 0;
        text3.style.marginLeft = (-50) + "px";
        bag4.style.opacity = 0;
    }

    let value1;
    if (window.innerWidth <= 900){
       value1 = 550;
    } else{
        value1 = 350;
    }


    if(scroll2.toFixed() > sign4.offsetTop - value1){
        text4.style.opacity = 1;
        text4.style.marginLeft = 0 + "px";
        text4.style.transitionDuration = 1 + 's';
        bag5.style.opacity = 1;
        bag5.style.transitionDuration = 2 + 's';
    } else if(scroll2.toFixed() < sign4.offsetTop - 100 + "px"){
        text4.style.opacity = 0;
        text4.style.marginLeft = (-50) + "px";
        bag5.style.opacity = 0;
    }
})


  