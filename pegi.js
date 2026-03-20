const button = document.getElementById("button")
const body = document.querySelector("body")

function dark() { 
    if (body.style.background === "black") {
        body.style.background = "#f72585" }
    else{
        body.style.background = "black" 
    }
}

button.addEventListener('click', () => {
 body.classList.toggle('black')
})



const toppegi = document.querySelectorAll(".toppegi");

const color = {
    "3" :"#70CF27",
    "7": "#D4B52A",
    "12": "orange",
    "16": "#CF4730",
    "18": "#CF2727",
}


toppegi.forEach((toppeg) => {

    const pegi = toppeg.getAttribute("data-pegi")

    toppeg.addEventListener("mouseenter", () => {
        toppeg.style.background = color[pegi]
    })
    
    toppeg.addEventListener("mouseleave", () => {
        setTimeout(() => {
        toppeg.style.background = "";
        }, 0);

    })



})