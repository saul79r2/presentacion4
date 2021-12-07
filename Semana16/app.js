const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnIzq =document.querySelector("#btn-izquierda");
const btnDer =document.querySelector("#btn-derecha");

slider.insertAdjacentElement("afterbegin",sliderSectionLast);

function siguiente () {
 let = sliderSelectorFirst=document.querySelectorAll(".slider__section") [0];
 slider.style.marginLeft = "-200%";
 slider.style.transition = "all 0.5s"

 setTimeout (function () {
slider .style.transition = "none";
slider.insertAdjacentElement("beforeend",sliderSelectorFirst);

slider.style.marginLeft="-100%";
 }, 500);
    }

 btnDer.addEventListener ("click",function(){ 

    siguiente();

 });
