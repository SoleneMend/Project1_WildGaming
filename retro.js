const slide = document.querySelector(".slide");
const computer = document.querySelectorAll(".computer");
let index = 0;

setInterval(function() {
    index++;

    if (index >= computer.length) {
        index = 0;
    }

    slide.style.transform = 'translateX(-' + (index * 517) + 'px)';
}, 5000);

const images = ["./images/retroConsole2.png.webp", "./images/retroconsole3.jpg", "./images/retroconsole.webp"];
let i = 0;
const duree = 2000;
const fondu = 1000;
const consoleBefore = document.getElementsByClassName("consoleBefore")[0];
const consoleAfter = document.getElementsByClassName("consoleAfter")[0];

function changeSlide() {
    i++;
    if (i >= images.length) {
        i = 0;
    }
    consoleAfter.src = images[i];
    consoleBefore.style.opacity = 0;

setTimeout(function() {
    consoleBefore.src = images[i];
    consoleBefore.style.opacity = 1;
    }, fondu);
}

setInterval(changeSlide, duree + fondu);