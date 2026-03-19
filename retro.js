// premiere image 
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

// deuxieme image 
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

// image en bas
document.querySelectorAll(".first img").forEach(image => {
    image.onclick = () =>{
        document.querySelector(".popupImage").style.display = "block";
        document.querySelector(".popupImage img").src = image.getAttribute("src");
    }
})
document.querySelectorAll(".second img").forEach(image => {
    image.onclick = () =>{
        document.querySelector(".popupImage").style.display = "block";
        document.querySelector(".popupImage img").src = image.getAttribute("src");
    }
})
document.querySelector(".popupImage .time").onclick = () =>{
     document.querySelector(".popupImage").style.display = "none";
}
document.querySelector(".popupImage").onclick = (e) => {
    if (e.target === e.currentTarget) {
        e.currentTarget.style.display = "none";
    }
}