const allDiv = document.querySelectorAll(".divjs");
for (const div of allDiv) {
    div.addEventListener("mouseenter", () => {
        div.classList.add('blue')
        div.style.transform = "scale(1.2)"
    }
    )

    div.addEventListener("mouseleave", () => {
        div.classList.remove('blue')
        div.style.transform = "scale(1)"
    }
    )
}
const imageElement = document.getElementById('headerImg');
const images = ['./images/index-img1.jpg', './images/index-img2.jpg', './images/index-img3.jpg'];
let index = 0;


setInterval(() => {
    imageElement.classList.add('hidden');
    setTimeout(() => {
        index = (index + 1) % images.length;
        imageElement.src = images[index];
        imageElement.classList.remove('hidden');
    }, 1000);
}, 6000);