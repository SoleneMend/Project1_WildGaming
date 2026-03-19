const button = document.getElementById("button")
const body = document.querySelector("body")

function dark() { 
    if (body.style.background === "black") {
        body.style.background = "purple" }
    else{
        body.style.background = "black" 
    }
}

button.addEventListener('click', () => {
 body.classList.toggle('black')
})



const toppegi = document.querySelectorAll(".toppegi");

const color = {
    "3" :"green",
    "7": "yellow",
    "12": "orange",
    "16": "pink",
    "18": "red",
}


toppegi.forEach((toppeg) => {

    const pegi = toppeg.getAttribute("data-pegi")

    toppeg.addEventListener("mouseenter", () => {
        toppeg.style.background = color[pegi]
    })
    
    toppeg.addEventListener("mouseleave", () => {
        setTimeout(() => {
        toppeg.style.background = "";
        }, 500);

    })



})